class Shop {

    constructor ( protected name: string) {
        this.name = name;
    }


};


class  Riachuelo extends Shop {

    static instance: Riachuelo;

    private constructor(){
        super('Riachuelo');
    };


    static getInstance(){
       if (!Riachuelo.instance){
           return this.instance =  new Riachuelo();
           
       }
       console.log('Not Created', this.instance.name );
    };
};

console.log('-----------04-Singleton---------------');

const riachuelo =  Riachuelo.getInstance();
const riachuelo2 =  Riachuelo.getInstance();

console.log('--------------------------------------');