const promise = new Promise(function(resolve, reject) {
    const anythingToLowerCase = anything => {
        if (!anything) {
            return resolve(console.log('Пусто'));
        } else {
            return reject(String(anything).toLowerCase());
        }
    }
    anythingToLowerCase('g');
});

