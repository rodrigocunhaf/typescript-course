interface  Smartphone {
    readonly name:string;
    price?: number;
};

class Celphone implements Smartphone {
    constructor( public name: string , public price?: number){};
};


let celphone: Smartphone;

celphone =  new Celphone( 'Nokia');

let celphone2: Smartphone;

celphone2 =  new Celphone( 'Iphone',200000);


console.log('-----------08-optional------------------');
console.log(celphone);
console.log(celphone2);
console.log('----------------------------------------');