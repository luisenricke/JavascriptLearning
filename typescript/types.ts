(function(){

    let message: string = 'Hello';
    let magicNumber: number = 10;
    let magicBoolean: boolean = true;
    let today: Date = new Date();
    let anyObject;
    let anyObjectPipes: string | number | boolean;


    // message = 123; // ERROR: Type

    anyObject = message;
    anyObject = magicNumber;
    anyObject = magicBoolean;
    anyObject = today;

    anyObjectPipes = message;
    anyObjectPipes = magicNumber;
    anyObjectPipes = magicBoolean;
    // anyObjectPipes = today; // ERROR: Pipe configuration isn't enable for Date

    let hero = {
        name: 'Spiderman',
        power: 50
    };

    hero = {
        name: 'Spiderman',
        power: 70
    };

    console.log( hero );
})();

