function returnName ( name:string ,secondName: string , cb: (firstname:string, lastname: string) => string ){
    return cb( name, secondName );
};

function combine ( firstname: string, lastname: string ) {
    return firstname + lastname +  'ok';
};

console.log(returnName( 'clark ','kent' , combine ))