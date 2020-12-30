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


    const sum = (a: number, b: number): number => a + b;
    const sayHi = (): string => 'Hello Luis';

    const getSalary = (): Promise<number> => {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    };

    getSalary()
        .then( a => console.log( a ))
        .catch(error => console.warn( error));

})();
