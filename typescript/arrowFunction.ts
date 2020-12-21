(function(){

    const myFunction = function ( a: string ) {
        return a.toUpperCase();
    };

    const myArrowFunction = (a: string) => a.toUpperCase();

    console.log( myFunction('Normal') );
    console.log( myArrowFunction('Arrow') );

    const sum = function( first: number, second: number) {
        return first + second;
    }

    const sumArrow = (first: number, second: number) => first + second;

    console.log( sum(1,1) );
    console.log( sumArrow(1,1) );

    let hulk = {
        name: 'Hulk',
        attack() {

            setTimeout( () => {
                console.log(`${this.name} attacking`);
            }, 1000);

        }
    };

    hulk.attack();
})();
