console.log('--------04-keyOf--------');

const person = {
    name: 'Clark Kent'
};

function verifyKey <T extends object , U  extends keyof T > ( person: T, key: U){
    return `${[key]} is a key`;
};

console.log(verifyKey(person, 'name') )

console.log('-------------------------------------');