enum ProjectStatus {
    COMPLETED = 'COMPLETED',
    PROGRESS = 'PROGRESS'
};

interface ProjectInterface {
    
    get Title():string;

    get Id():number;

    get Description():string;

    get Peoples():number;
};


class Project implements ProjectInterface{
    constructor(
        private id: number,
        private title:string,
        private description:string,
        private peoples:number,
        private status: ProjectStatus
    ){};

    get Title(){
        return this.title;
    };

    get Id(){
        return this.id;
    };

    get Description(){
        return this.description;
    };

    get Peoples(){
        return this.peoples;
    };

    get Status(){
        return this.status;
    };

    setStatus(newStatus:ProjectStatus){
        this.status = newStatus;
    };
};


interface Component <T> {
    
    getElement():HTMLElement;

    configure(event:T):void;
};

abstract class AbstractList <T> {

    protected list:T[] = [];

    constructor(){};

    abstract getList(): T[];

    abstract dragOverConfig(event:DragEvent):void;

    abstract dropConfig(event:DragEvent):void;
};


function Autobind(){
    return function ( _1: any, _2:string, description: PropertyDescriptor ){
        const originalFunction = description.value;
        const adjustedFunction: PropertyDescriptor = {
            configurable:true,
            enumerable:false,
            get() {
                return originalFunction.bind(this);
            }
        };
        return adjustedFunction;
    };
};

class CompletedList extends AbstractList <Project> implements Component <DragEvent>{
    
    private element:HTMLElement;
    private name:string;

    constructor(idElement:string){
        super();
        this.element = document.getElementById(idElement);
        this.name = idElement;
    };

    findProductById(id: number): Project {
        const project = this.list.find( item => item.Id === +id);
        return project;
    };

    addProjectOnList(project: Project){
        this.list.push(project);
    };

    getList(){
        return this.list;
    };

    getElement(): HTMLElement {
        return this.element;
    };

    @Autobind()
    configure(event:DragEvent){
        switch (event.type){
            case 'dragover':
                return this.dragOverConfig(event);
            case 'drop':
                return this.dropConfig(event);
            default:
                return;
        };
    };
    
    dragOverConfig(event:DragEvent) {
        event.preventDefault();
    };

    dropConfig(event:DragEvent) {
        const idProject = event.dataTransfer.getData('id');

        const child = document.getElementById(`project-id-${idProject}`);

        const index = progressList.getList().findIndex( item => item.Id === +idProject);

        let project:Project

        project = [...progressList.getList().splice(index,1)][0];

        project.setStatus(ProjectStatus.COMPLETED);

        ItemGenerator(project,completedList);

        completedList.addProjectOnList(project);

        progressList.getElement().removeChild(child);
    };
};


class ProgressList extends AbstractList <Project> implements Component <DragEvent>{
    
    private element:HTMLElement;
    private name:string;
    private id:number = 1;

    constructor(idElement:string){
        super();
        this.element = document.getElementById(idElement);
        this.name = idElement;
    };

    findProductById(id: number): Project {
        const project = this.list.find( item => item.Id === +id);
        return project;
    };

    addProjectOnList(project: Project){
        this.list.push(project);
        this.setId();
    };

    getList(){
        return this.list;
    };

    getElement(): HTMLElement {
        return this.element;
    };

    setId(){
        this.id++;
    };

    getId(){
        return this.id;
    };

    @Autobind()
    configure(event:DragEvent){
        switch (event.type){
            case 'dragover':
                return this.dragOverConfig(event);
            case 'drop':
                return this.dropConfig(event);
            default:
                return;
        };
    };

    dragOverConfig(event:DragEvent): void {
        event.preventDefault();
    };

    dropConfig(event:DragEvent) {
        const idProject = event.dataTransfer.getData('id');

        const child = document.getElementById(`project-id-${idProject}`);

        const index = completedList.getList().findIndex( item => item.Id === +idProject);

        let project:Project

        project = [...completedList.getList().splice(index,1)][0];

        project.setStatus(ProjectStatus.PROGRESS);

        ItemGenerator(project,progressList);

        progressList.addProjectOnList(project);

        completedList.getElement().removeChild(child);
    };
        
};


class Form implements Component <SubmitEvent> {

    private form:HTMLFormElement;
    private title:HTMLInputElement;
    private description:HTMLInputElement;
    private peoples:HTMLInputElement;

    constructor(){
        this.form = document.getElementById('form') as HTMLFormElement;
        this.title = document.getElementById('title-input') as HTMLInputElement;
        this.description = document.getElementById('description-input') as HTMLInputElement;
        this.peoples = document.getElementById('peoples-input') as HTMLInputElement;
    };  

    getElement(): HTMLElement {
        return this.form;  
    };

    @Autobind()
    configure(event:SubmitEvent) {
        event.preventDefault();
        this.submitHandler();
    };

    clearForm(){
        this.title.value ='';
        this.description.value='';
        this.peoples.value='';
    };

    submitHandler(){
        const { title, description, peoples } = { title:this.title.value , description:this.description.value, peoples:this.peoples.value};  
    
        const isProject = Validation.isValid([title,description,peoples], progressList.getId());

        if (isProject instanceof Project){
            progressList.addProjectOnList(isProject);
            ItemGenerator(isProject, progressList);
            this.clearForm();
            return;
        };
        return;
    };
};

enum ErrosList {
    TITLE = 'Please, type a valid title.\n',
    DESCRIPTION = 'Please, type a valid description.\n',
    PEOPLES ='Plesas, type a valid peoples number.\n'
};

class Validation {

    constructor(){};

    static isValid( inputs:string[], maxId:number) {
        let text='';

        !inputs[0] ? text+=ErrosList.TITLE : "";

        !inputs[1] ? text+=ErrosList.DESCRIPTION : "";

        !+inputs[2] ? text+=ErrosList.PEOPLES : "";

        if (text.length > 0){
            alert(text);
            return;

        } else {
            return new Project( maxId, inputs[0], inputs[1], +inputs[2],ProjectStatus.PROGRESS);
        };
    };
};

function ItemGenerator (project:Project, listType: ProgressList | CompletedList ){
    const newElement = document.createElement('li');

    if (project.Status === 'PROGRESS'){
        newElement.className = 'progress';

    } else {
        newElement.className = 'completed';
    };

    newElement.setAttribute('draggable','true');
    newElement.setAttribute('id',`project-id-${project.Id}`)

    newElement.addEventListener('dragstart', function ( event ){
        event.dataTransfer.setData('id',`${project.Id}`);
    });

    const titlediv = document.createElement('div');
    titlediv.setAttribute('class','project-item-title');

    const titleContext = document.createElement('b');
    titleContext.textContent ='Title:';

    const title = document.createElement('p');
    title.textContent = project.Title;


    titlediv.appendChild(titleContext);
    titlediv.appendChild(title);



    /*-------------------*/

    const descriptiondiv = document.createElement('div');
    descriptiondiv.setAttribute('class','project-item-description');

    const descriptionContext = document.createElement('b');
    descriptionContext.textContent ='Description:';

    const description = document.createElement('p');
    description.textContent = project.Description


    descriptiondiv.appendChild(descriptionContext);
    descriptiondiv.appendChild(description);


    /*-------------------*/

    const peoplesdiv = document.createElement('div');
    peoplesdiv.setAttribute('class','project-item-peoples');

    const peoplesContext = document.createElement('b');
    peoplesContext.textContent ='Peoples:';

    const peoples = document.createElement('p');
    peoples.textContent = `${project.Peoples} assigned ${project.Title}`;


    peoplesdiv.appendChild(peoplesContext);
    peoplesdiv.appendChild(peoples);

    /*-------------------------*/


    newElement.appendChild(titlediv);
    newElement.appendChild(descriptiondiv);
    newElement.appendChild(peoplesdiv);

    listType.getElement().appendChild(newElement);

};

const progressList = new ProgressList('progress-list');
progressList.getElement().addEventListener('dragover',progressList.configure);
progressList.getElement().addEventListener('drop',progressList.configure);


const completedList = new CompletedList('completed-list');
completedList.getElement().addEventListener('dragover',completedList.configure);
completedList.getElement().addEventListener('drop',completedList.configure); 


const form = new Form();
form.getElement().addEventListener('submit',form.configure);







