interface Eletronics {
    readonly name: string;

    getName():void;
};

interface Batery {
    readonly lifeTime:number;

    getLifeTime():void;
};

interface Rechargeable extends Eletronics, Batery{
    readonly isRechargeable:boolean;

    getRechargeable():void;
};


class Acessory implements Rechargeable {

    name:string;
    lifeTime:number;
    isRechargeable:boolean;

    constructor (name:string , isRechargeable: boolean, lifeTime:number){
        this.name = name;
        this.isRechargeable = isRechargeable;
        this.lifeTime = lifeTime;
    }

    getLifeTime(): void {
        console.log(this.lifeTime);
    };

    getName(): void {
        console.log(this.name);
    };

    getRechargeable(): void {
        console.log(this.isRechargeable);
    };
};

let accessory1 : Rechargeable

accessory1  = new Acessory('Smartphone', true, 20)


console.log('-----------07-interfaces-inheritance---------------');
accessory1.getLifeTime();
accessory1.getName();
accessory1.getRechargeable();

console.log('---------------------------------------------------');
//accessory1.name = 'Smartphone2' -> I'NOT POSSIBLE!!!