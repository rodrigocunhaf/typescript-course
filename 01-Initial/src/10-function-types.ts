//Function Types

function add ( num1: number , num2 : number){
    return num1 + num2
};

let pseudoAdd : ( a:number , b: number) => void

pseudoAdd = add;

console.log(pseudoAdd(1,2))