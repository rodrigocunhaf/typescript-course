console.log('------------------05--index-properties-------------------------------');

interface Medal {
    [prop: string]:string
}   

const medal: Medal = {
    name: 'Olympic',
    organization:'Olympic Organization',
    sport:'Karate'
}

console.log(medal)

console.log('----------------------------------------------------------------------');