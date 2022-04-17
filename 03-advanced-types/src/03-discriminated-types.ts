console.log('------------------03-discriminated-types------------------------');


type Cat = {
    type:'cat'
    name:string
    catFood:string;
};

type Dog = {
    type:'dog'
    name:string
    dogFood:string;
};

type Animal =  Cat | Dog


function verifyAnimal ( animal: Animal ) {
    switch ( animal.type){
        case 'cat':
            console.log(`${animal.name} is ${animal.type} and like a ${animal.catFood}`);
            return
        case 'dog':
            console.log(`${animal.name} is ${animal.type} and like a ${animal.dogFood}`);
            return;
        default:
            console.log('Not a animal');
    };
};



verifyAnimal({ type:'cat' , name:'Garfield' , catFood:'Whiskas'});
verifyAnimal({ type:'dog' , name:'SuperDog' , dogFood:'Gran Plus'});

console.log('----------------------------------------------------------------');