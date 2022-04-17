console.log('--------05-generic-classes--------');

class Student <T>{

    private materials: Array <T> = [];

    constructor ( private name: string){};

    get Name (){
        return this.name;
    };

    addMaterial ( material: T) {
        this.materials.push (material);
        return
    };
    
    get Materials (){
        return this.materials;
    }
};

const student = new Student <string> ('Rodrigo');

console.log(student.Name);

student.addMaterial( 'pen');
student.addMaterial( 'erase');
student.addMaterial( 'book');

console.log(student.Materials);



console.log('-------------------------------------');