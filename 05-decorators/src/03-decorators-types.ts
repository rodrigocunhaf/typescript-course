console.log('------------03-decorators-types------------');


function DecoratorLogger( logDate: Date ){
    return function( target: any){
        console.log(`Log ${target.name} date:${logDate}`)
    }
};

function DecoratorLoggerFunction (  target: any, functionName: string , configurationClass: any){
        console.log(target);
        console.log(functionName);
        console.log(configurationClass);
    
};

function DecoratorLoggerProperties (target: any , propertyName:string){
    console.log(propertyName);
};

function DecoratorLoggerParams (target:any, propetyKey:string, indexParam:number){
    console.log('param name', propetyKey);
};


@DecoratorLogger(new Date())
class ObjectRoom {

    @DecoratorLoggerProperties
    private material: string [] = [];

    constructor ( private name: string ){};

    @DecoratorLoggerFunction
    set ObjectName(  @DecoratorLoggerParams newName: string){
        this.name = newName;
    };
};





console.log('-------------------------------------------');