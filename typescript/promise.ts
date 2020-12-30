(() => {

    console.log('Start');

    const promtOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('stop the timeout');
            reject('stop the timeout'); // Uncaught error if not catch the error
        }, 1000);
    });

    promtOne
        .then(message => console.log(message))
        .catch(err => console.warn(err));

    console.log('End');
})();
