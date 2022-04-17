class Department {

    constructor ( public name: string) {
    };

    getDepartmentName( this: Department){
        return this.name;
    };

};

const accounting = new Department('Derpatment');

const copyDepartment = { name: 'shirt', 
                        getDepartmentName: accounting.getDepartmentName };


console.log('---------------01-start-class------------');                      

console.log(copyDepartment.getDepartmentName());

console.log('-----------------------------------------');