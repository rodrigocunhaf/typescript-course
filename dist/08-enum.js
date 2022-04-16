"use strict";
//ENUM TYPE
var Profession;
(function (Profession) {
    Profession[Profession["TEACHER"] = 1] = "TEACHER";
    Profession[Profession["DIRECTOR"] = 2] = "DIRECTOR";
    Profession[Profession["STUDENT"] = 3] = "STUDENT";
})(Profession || (Profession = {}));
const person = {
    name: 'Clark Kent',
    profession: Profession.STUDENT
};
console.log(person);
