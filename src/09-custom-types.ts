//Type String

type LiteralType = 'is-sum' | 'is-sub'

function combineExample9 ( num1:number , num2:number , operation: LiteralType) {
    if ( operation === 'is-sum'){
        console.log(num1 +  num2);
    };

    if ( operation === 'is-sub'){
        console.log(num1 - num2);
    }
};
combineExample9(1,2, 'is-sum')