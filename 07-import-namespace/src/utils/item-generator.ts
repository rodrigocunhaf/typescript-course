namespace App {

    export function ItemGenerator (project:Project, listType: ProgressList | CompletedList ){
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
};