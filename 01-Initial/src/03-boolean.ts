//Type Boolean

function addExample3 ( num1:number , num2:number , result: string , operation: boolean) {
    let total : number;
    
    if (operation){
        total = num1 + num2;
        console.log(result, total)
    } else {
        total = num1 - num2;
        console.log(result, total)
    };
};

addExample3(1,2, 'Total is:', true)
