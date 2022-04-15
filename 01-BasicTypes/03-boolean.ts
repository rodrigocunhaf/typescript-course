//Type Boolean

function add ( num1:number , num2:number , result: string , operation: boolean) {
    let total : number;
    
    if (operation){
        total = num1 + num2;
        console.log(result, total)
    } else {
        total = num1 - num2;
        console.log(result, total)
    };
};

add(1,2, 'Total is:', true)
