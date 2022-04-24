import { AbstractList  } from '../models/abstractList.js';
import { Project  } from '../models/project.js';
import  { Component } from '../interfaces/component.js';
import { Autobind } from '../decorators/autobind.js';
import { progressList, completedList, form } from '../app.js';
import { ItemGenerator } from '../utils/item-generator.js';
import { ProjectStatus } from '../enums/project-status.js';
import { CompletedList } from './completed-list.js';

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
    configure(event:DragEvent, completedList: CompletedList){
        switch (event.type){
            case 'dragover':
                return this.dragOverConfig(event);
            case 'drop':
                return ProgressList.dropConfig( event, this , completedList)
            default:
                return;
        };
    };

    dragOverConfig(event:DragEvent): void {
        event.preventDefault();
    };

    static dropConfig(event:DragEvent , progressList: ProgressList, completedList: CompletedList) {
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

export { ProgressList };