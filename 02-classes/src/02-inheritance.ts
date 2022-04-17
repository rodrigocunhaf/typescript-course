class Person {

    protected quality: string;

    constructor( public name: string , public cpf:string){
        this.quality = 'test';
    };
};


class Musician extends Person {
    constructor(name:string, cpf:string, private instrument:string){
        super( name, cpf);
    };

    getQuality () {
        return this.quality;
    };
};

const person1 = new Musician('Addam', '00000000000-00', 'Guitar');

console.log('-----------02-inheritance---------------');
console.log(person1.getQuality());
console.log('-----------------------------------------');