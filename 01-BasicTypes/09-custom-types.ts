//Type String

type LiteralType = 'is-sum' | 'is-sub'

function combine ( num1:number , num2:number , operation: LiteralType) {
    if ( operation === 'is-sum'){
        console.log(num1 +  num2);
    };

    if ( operation === 'is-sub'){
        console.log(num1 - num2);
    }
};
combine(1,2,'is-sub')