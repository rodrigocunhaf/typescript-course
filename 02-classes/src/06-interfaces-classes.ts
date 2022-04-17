interface Food {
    name:string;
    price:number;

    getFood():void;
};

class Sandwich implements Food {

    constructor ( public name:string, public price:number){

    };

    getFood(){
        console.log(this);  
    };
};


let sandwich1 : Food;

sandwich1 =  new Sandwich('Big Tasty', 70);

console.log('--------06-interfaces-classes---------------');

sandwich1.getFood();

console.log('---------------------------------------------');