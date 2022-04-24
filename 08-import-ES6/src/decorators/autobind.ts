function Autobind(){
    return function ( _1: any, _2:string, description: PropertyDescriptor ){
        const originalFunction = description.value;
        const adjustedFunction: PropertyDescriptor = {
            configurable:true,
            enumerable:false,
            get() {
                return originalFunction.bind(this);
            }
        };
        return adjustedFunction;
    };
};

export { Autobind };