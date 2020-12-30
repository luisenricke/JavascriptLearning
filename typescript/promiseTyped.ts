(() => {


    const cashBack = (mount: number): Promise<number> => {
        let balance = 1000;

        return new Promise((resolve, reject) => {
            if( mount > balance) {
                reject('Your request to much money');
            } else {
                balance -= mount;
                resolve(balance)
            }
        });
    };

    cashBack( 1500 )
        .then(money => console.log(`You have $${money}`))
        .catch(error => console.warn(error));

})();
