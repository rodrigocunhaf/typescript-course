/// <reference path='./models/ListsProjects/Progress-list-class.ts' />
/// <reference path='./models/ListsProjects/Completed-list-class.ts'/>
/// <reference path='./models/Form/Form-class.ts' />

namespace App {    

    export const progressList = new ProgressList('progress-list');
    progressList.getElement().addEventListener('dragover',progressList.configure);
    progressList.getElement().addEventListener('drop',progressList.configure);


    export const completedList = new CompletedList('completed-list');
    completedList.getElement().addEventListener('dragover',completedList.configure);
    completedList.getElement().addEventListener('drop',completedList.configure); 


    export const form = new Form();
    form.getElement().addEventListener('submit',form.configure);

};







