//ENUM TYPE

enum Profession { 
    TEACHER = 1,
    DIRECTOR = 2,
    STUDENT = 3
}

const person : { 
    name:string;
    profession:Profession
} = {
    name:'Clark Kent',
    profession:Profession.STUDENT
};

console.log(person)