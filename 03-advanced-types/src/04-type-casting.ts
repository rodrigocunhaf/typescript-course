console.log('------------------04-type-casting-------------------------------');

console.log('Result on the page.');

const titlePage = document.getElementById('page-title')!;

titlePage.textContent = 'ADVANCED-TYPES';

const inputUser = <HTMLInputElement> document.getElementById('input-user');

inputUser.value = 'Rodrigo Cunha França';

console.log('----------------------------------------------------------------');