"use strict";
function returnName(name, secondName, cb) {
    return cb(name, secondName);
}
;
function combine(firstname, lastname) {
    return firstname + lastname + 'ok';
}
;
console.log(returnName('clark ', 'kent', combine));
