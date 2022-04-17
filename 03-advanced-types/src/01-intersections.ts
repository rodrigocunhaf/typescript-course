console.log('------------------01-intersections------------------------');

type Admin = {
    name:string;
    identity:number
};

/*interface Admin {
    name:string;
    identity:number;
}*/

type People  = {
    name:string;
    phoneNumber:string;
};

/*interface People {
    name:string;
    identity:number;
}*/

//interface SuperAdmin extends Admin, People {};


type SuperAdmin = Admin & People;



type Numeric = number | boolean;

type LiteralString = string | boolean;

type Universal = Numeric & LiteralString;

const human : {
    configs:SuperAdmin;
} = {
    configs :{
        name: 'teste',
        identity:25,
        phoneNumber: '23123123213'
    }
};

console.log(human)



console.log('----------------------------------------------------------');