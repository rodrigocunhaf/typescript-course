console.log('------------------02-Guards------------------------');


type Hero = {
    name: string;
    isHero:boolean;
};

type Vilain = {
    name: string;
    isVilain:boolean;
};

type Person =  Hero | Vilain;

const person1 : Hero  ={
    name: 'Clark Kent',
    isHero:true
}


const person2 : Vilain = {
        name:'Lex Luthor',
        isVilain:true
    }



function verifyPerson ( person: Vilain | Hero ){
    if ( 'isVilain' in person){
        console.log(`${person.name} is a vilain.`)
    } else {
        console.log(`${person.name} is a hero.`)
    }
};

verifyPerson(person1)
verifyPerson(person2)



console.log('---------------------------------------------------');