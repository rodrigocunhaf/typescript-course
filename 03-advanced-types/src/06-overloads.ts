console.log('------------------06--overloads----------------------------------------');

type GeneralDefault = string | number;

function combination( dataOne: string , dataTwo: number) : string;
function combination( dataOne: number , dataTwo: number) : number;
function combination( dataOne: string , dataTwo: string) : string;
function combination ( dataOne: GeneralDefault , dataTwo: GeneralDefault){
    if ( typeof dataOne === 'number' && typeof dataTwo === 'number'){
        return dataOne + dataTwo;
    };
    return dataOne.toString() + dataTwo.toString();
};

let result = combination( ' ', 2);

result.split(' ');

console.log('----------------------------------------------------------------------');