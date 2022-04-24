/// <reference path='./Abstract-list-class.ts'/>
/// <reference path='../../utils/item-generator.ts'/>
/// <reference path='../../utils/autobind.ts'/>

namespace App{

    export class CompletedList extends AbstractList <Project> implements Component <DragEvent>{
        
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
}