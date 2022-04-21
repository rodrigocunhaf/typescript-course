/* elements */
const body = document.getElementById('root')! as HTMLElement;

class Project {
    private title:string
    private description:string
    private peoples:string
    constructor( title:string, description:string,  peoples:number ){
        this.title = title;
        this.description = description;
        this.peoples = `${peoples} persons assigned.`;
    };

    get Peoples(){
        return this.peoples;
    };

    get Title(){
        return this.title;
    };

    get Description(){
        return this.description;
    };

    createProject(){
       const boxProject = document.createElement('li');

       const title = document.createElement('p');
       title.textContent = this.title;
       boxProject.appendChild(title);

       const description = document.createElement('p');
       description.textContent = this.description;
       boxProject.appendChild(description);

       const peoples = document.createElement('p');
       peoples.textContent = this.peoples;
       boxProject.appendChild(peoples);

       progressList.appendChild(boxProject);
    };
};

function verifyForm(){
    const existForm = document.getElementById('form-project');

    if (!existForm){
        const form = document.createElement('form');
        form.setAttribute('id','form-project')
        form.addEventListener('submit', Form.submitForm)
        body.appendChild(form); 

        return form;
    };
    return existForm
};

/*---------decorators-FORM--------- */

function CreateElementDecoration(typeElement:string, optionalType: string){
    return function ( target:any, propertieName:string){
        const form = verifyForm();
        
        switch(typeElement){
            case 'INPUT_TYPE':
                const input = document.createElement('input');
                input.setAttribute('type', optionalType);
                input.setAttribute('id',`input-${propertieName}`)

                const label = document.createElement('label');
                label.textContent = propertieName;

                label.appendChild(input);
                form.appendChild(label);
                return

            case 'BUTTON_TYPE':
                const button = document.createElement('button');
                button.setAttribute('type', optionalType);
                button.textContent = 'Submit';
                form.appendChild(button);
                return
            default:
                return
        };
    }; 
};


/*---------------------------------- */
 
class Form {
    @CreateElementDecoration('INPUT_TYPE','text')
    private title!:string;

    @CreateElementDecoration('INPUT_TYPE','text')
    private description!:string;

    @CreateElementDecoration('INPUT_TYPE','text')
    private peoples!:string;

    @CreateElementDecoration('BUTTON_TYPE','submit')
    private button!:string;

    constructor(){};

    static submitForm( event:any ) {
        event.preventDefault();
        const title = document.getElementById('input-title') as HTMLInputElement;
        const description = document.getElementById('input-description') as HTMLInputElement;
        const peoples= document.getElementById('input-peoples') as HTMLInputElement

        const project = new Project(title.value, description.value, +peoples.value);
        
        project.createProject();
    }
};


const progressList = document.createElement('ul');
body.appendChild(progressList)






