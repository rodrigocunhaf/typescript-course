interface Car {
    name: string;
    maxVel:number;

    carName():void;
};


let car1: Car;

car1 = {
    name: 'Ferrari',
    maxVel: 320,
    carName(){
        console.log(this.name);
    }
}

console.log('-----------05-interfaces---------------');

car1.carName();

console.log('---------------------------------------');