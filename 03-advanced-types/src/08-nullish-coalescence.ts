console.log('------------------08--nullish-coalescence---------------------------------------');

//null
const port = undefined

const serverPort = port ?? 'production';

console.log(serverPort)


console.log('----------------------------------------------------------------------');