import { CompletedList  } from './components/completed-list';
import { ProgressList } from './components/progress-list';
import { Form } from './components/form';

export const progressList = new ProgressList('progress-list');
progressList.getElement().addEventListener('dragover',( event:DragEvent ) => {
    progressList.configure(event, completedList);
});

progressList.getElement().addEventListener('drop',( event:DragEvent )=> {
    progressList.configure(event, completedList);
});


export const completedList = new CompletedList('completed-list');
completedList.getElement().addEventListener('dragover', ( event:DragEvent )=> {
    completedList.configure(event, progressList);
});

completedList.getElement().addEventListener('drop', ( event:DragEvent )=> {
    completedList.configure(event, progressList);
});


export const form = new Form();
form.getElement().addEventListener('submit',form.configure);




