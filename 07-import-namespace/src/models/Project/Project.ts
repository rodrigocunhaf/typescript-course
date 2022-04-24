namespace App{

    export class Project implements ProjectInterface{
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
};