
console.log('-----------02-decorators-factory----------');

function DecoratorFactory( log: string){
    return function ( constructor : Function){
        console.log(log);
    };
};


@DecoratorFactory('Animal - Created')
class Animals {
    constructor ( private type: string){};
}

const animal =  new Animals('Bird');

console.log('------------------------------------------');
