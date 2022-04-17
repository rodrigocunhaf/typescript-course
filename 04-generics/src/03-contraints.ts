console.log('--------03-contraints--------');


function combinePetOwner <T extends object, U extends object> ( owner: T, animal: U) {
    return { ...owner , ...animal };
};

let petOwner1 = combinePetOwner ( { name: 'Clark Kent'} , { dogName: 'SuperDog'});


console.log(petOwner1);







console.log('-------------------------------------');