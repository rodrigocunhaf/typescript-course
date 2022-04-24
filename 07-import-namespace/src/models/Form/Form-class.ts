namespace App {

    export class Form implements Component <SubmitEvent> {

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
};