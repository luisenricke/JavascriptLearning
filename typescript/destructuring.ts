(() => {

    const avenger = {
        name: 'Peter Parker',
        code: 'Spiderman',
        power: 'powers of spider'
    };

    console.log( avenger.name );
    console.log( avenger.code );
    console.log( avenger.power );

    console.log( '~~~~~ Destructuring Object ~~~~~' );
    const { name, code, power } = avenger;
    console.log( name );
    console.log( code );
    console.log( power );

    console.log( '~~~~~ Destructuring Object with function ~~~~~' );
    const destructuringFunction = ( { name, power }: any ) => {
        console.log( name );
        console.log( power );
    };

    destructuringFunction( avenger );


    console.log( '~~~~~ Destructuring Array ~~~~~' );
    const avengers: string[] = ['Spiderman', 'Ironman', 'Thor'];

    const [ first, second, third ] = avengers;

    console.log( first );
    console.log( second );
    console.log( third );

    console.log( '~~~~~ Destructuring Array with one element ~~~~~' );
    const [ , , thor ] = avengers;
    console.log( thor );

    console.log( '~~~~~ Destructuring Arrays with function v1 ~~~~~' );
    const destructuringArrays1 = ( avengers: string[] ) => {
        console.log( avengers[0] );
        console.log( avengers[1] );
        console.log( avengers[2] );
    };

    destructuringArrays1(avengers);

    console.log( '~~~~~ Destructuring Arrays with function v2 ~~~~~' );
    const destructuringArrays2 = ( [ first, second, third ] : string[] ) => {
        console.log( first );
        console.log( second );
        console.log( third );
    };

    destructuringArrays2(avengers);
})();
