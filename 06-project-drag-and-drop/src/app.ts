/*-------ENUMS----------*/
enum Status {
    PROGRESS = 'PROGRESS' ,
    COMPLETED = 'COMPLETED'
};

type GeneralHTML = HTMLFormElement | HTMLInputElement | HTMLUListElement;

/*------------------------*/

class Project {
    private title:string;
    private description:string;
    private peoples:string;
    public status:Status;
    public id:number;

    constructor( title:string, description:string, peoples:number, status:Status){
        this.title = title;
        this.description = description;
        this.peoples = `${peoples} assigned ${title}.`
        this.status = status;
    };

    get Description(){
        return this.description;
    };

    get Title(){
        return this.title;
    };

    get Peoples(){
        return this.peoples;
    }

    get Status(){
        return this.status;
    };

    get getID(){
        return this.id;
    };

    set Id (id:number){
        this.id = id;
    };
};

/*---------ABSTRACT--------*/


class Component {
    element:GeneralHTML
    constructor(current:string){
        this.element = document.getElementById(current) as GeneralHTML;
    };

    get Element(){
        return this.element;
    };

};


/*-----------Form------------------*/

function Autobind ( target: any , functionName: string, description: PropertyDescriptor){
    const originalMethod = description.value;
    const adjusted : PropertyDescriptor = {
        get(){
            return originalMethod.bind(this);
        }
    };
    return adjusted;
};

function EventList (typeElement:string){
    return function( target: any, methodName?:string, description?: PropertyDescriptor ){
        switch(typeElement){
            case 'form':
                const form = new target();
                Form.configure(form);
        }
    };
};

@EventList('form')
class Form extends Component {
    constructor(){
        super('form');
    };

    @Autobind
    static configure(current:Form): void {
        current.element.addEventListener('submit', current.submitHandler)
    };

    submitHandler (event: SubmitEvent){
        event.preventDefault();
        const title = document.getElementById('title-input') as HTMLInputElement;
        const description = document.getElementById('description-input') as HTMLInputElement;
        const peoples = document.getElementById('peoples-input') as HTMLInputElement;

        const newProject = new Project(title.value,description.value,+peoples.value, Status.PROGRESS);

        projectList.addProject(newProject);

        GenerateNewProject(newProject,projectList)

    };
};

function GenerateNewProject (project:Project ,projectList:GlobalList){
        const newElement = document.createElement('li');
        newElement.setAttribute('draggable','true');
        newElement.setAttribute('id',`${project.getID}`)

        if ( project.Status === 'PROGRESS'){
            newElement.className =  'progress'
        } else {
            newElement.className = 'completed'
        }

        newElement.addEventListener('dragstart', function (event:DragEvent){
            event.dataTransfer.setData('id',newElement.getAttribute('id'));
        })

        const titlediv = document.createElement('div');
        titlediv.setAttribute('class','project-item-title');

        const titleContext = document.createElement('b');
        titleContext.textContent ='Title:';

        const title = document.createElement('p');
        title.textContent = 'PROJECT-01';


        titlediv.appendChild(titleContext);
        titlediv.appendChild(title);



        /*-------------------*/

        const descriptiondiv = document.createElement('div');
        descriptiondiv.setAttribute('class','project-item-description');

        const descriptionContext = document.createElement('b');
        descriptionContext.textContent ='Description:';

        const description = document.createElement('p');
        description.textContent = 'DESCRIPTION PROJECT-01';


        descriptiondiv.appendChild(descriptionContext);
        descriptiondiv.appendChild(description);


        /*-------------------*/

        const peoplesdiv = document.createElement('div');
        peoplesdiv.setAttribute('class','project-item-peoples');

        const peoplesContext = document.createElement('b');
        peoplesContext.textContent ='Peoples:';

        const peoples = document.createElement('p');
        peoples.textContent = '3 assigned PROJECT-01';


        peoplesdiv.appendChild(peoplesContext);
        peoplesdiv.appendChild(peoples);

        /*-------------------------*/


        newElement.appendChild(titlediv);
        newElement.appendChild(descriptiondiv);
        newElement.appendChild(peoplesdiv);

        if (project.status === 'PROGRESS'){
            projectList.progressList.appendChild(newElement);
        } else {
            projectList.completedList.appendChild(newElement);
        }
};

function applyEvents ( element:HTMLElement , typeList:string ){

    element.addEventListener('dragover', (event:DragEvent)=>{
        event.preventDefault();
    });

    element.addEventListener('drop', function(event:DragEvent){
    
        const elementId = event.dataTransfer.getData('id'); 
    
        const child = document.getElementById(elementId);
    
        const project = projectList.list.find( item => item.id = +elementId);
        
        if ( typeList === 'COMPLETED'){
            project.status = Status.COMPLETED;
            projectList.progressList.removeChild(child);

        } else {
            project.status = Status.PROGRESS;
            projectList.completedList.removeChild(child);
        }
        
        GenerateNewProject(project, projectList);
    });
};

class GlobalList {
    list:Project[] =[];
    progressList: HTMLUListElement = document.getElementById('progress-list') as HTMLUListElement;
    completedList: HTMLUListElement = document.getElementById('completed-list') as HTMLUListElement;
    generateId: number = 1;

    constructor(){};

    addProject(project:Project){
        project.Id = this.generateId;
        this.list.push(project);
        this.updateId();
    };

    updateId(){
        this.generateId++;
    };
};

const projectList = new GlobalList();

const completedList = document.getElementById('completed-list');
const progressList = document.getElementById('progress-list');

applyEvents(completedList,'COMPLETED');
applyEvents(progressList,'PROGRESS');