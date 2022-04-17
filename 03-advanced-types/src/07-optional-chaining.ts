console.log('------------------07--optional-chaining---------------------------------------');

const fetchedData = {
    name: 'McDonalds',
    Sigle:'MC',
    config:{
        server:8080
    }
}

const fetchedData2 = {
    name: 'Buguer King',
    config:{
        location:'Brazil'
    }
}

console.log(fetchedData);

console.log(fetchedData2?.config?.server);

console.log('----------------------------------------------------------------------');