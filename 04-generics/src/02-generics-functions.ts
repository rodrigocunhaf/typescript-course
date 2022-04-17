console.log('--------02-generics-functions--------');


function combineObjects <T,U> ( objectOne: T , objectTwo: U ){
    return  { ...objectOne, ...objectTwo };
}

const newObject = combineObjects ( { name: 'Rodrigo'} ,{ age: '28' });

console.log(newObject.name);
console.log(newObject.age);

console.log('-------------------------------------');

