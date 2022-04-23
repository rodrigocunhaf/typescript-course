const listCompleted = document.querySelector('.list-box__list-progress');

const newElement = document.createElement('li');

const titlediv = document.createElement('div');
titlediv.setAttribute('class','project-item');

const titleContext = document.createElement('b');
titleContext.textContent ='Title:';

const title = document.createElement('p');
title.textContent = 'PROJECT-01';


titlediv.appendChild(titleContext);
titlediv.appendChild(title);



/*-------------------*/

const descriptiondiv = document.createElement('div');
descriptiondiv.setAttribute('class','project-item');

const descriptionContext = document.createElement('b');
descriptionContext.textContent ='Description:';

const description = document.createElement('p');
description.textContent = 'DESCRIPTION PROJECT-01';


descriptiondiv.appendChild(descriptionContext);
descriptiondiv.appendChild(description);


/*-------------------*/

const peoplesdiv = document.createElement('div');
peoplesdiv.setAttribute('class','project-item');

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

listCompleted.appendChild(newElement);
