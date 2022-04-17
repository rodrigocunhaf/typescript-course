abstract class Player {
    protected completeName: string
  constructor( private firstName: string, private lastName: string ) {
        this.completeName = `${firstName} ${lastName}`;
  };

   abstract get Name():string;

};


class PCPlayer extends Player {

    get  Name() {
        return this.completeName;
    };
};


const pcplayer1= new PCPlayer('Ana Paula', 'Lima');

console.log('-----------03-abstracts---------------');
console.log(pcplayer1.Name);
console.log('--------------------------------------');