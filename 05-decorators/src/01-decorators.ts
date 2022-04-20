console.log('-----------01-decorators------------------');

function Logger( constructor : Function){
    console.log(constructor);
};


@Logger
class Person { 
    constructor ( private name: string){
    };

};


const person1 = new Person('Ana Paula');

console.log('------------------------------------------');
