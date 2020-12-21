(function(){

    function activate(who: string, zone?: string, power: string = 'nothing') {
        if( zone ){
            console.log(`${who} has the power of ${power} work at ${zone}`);
        } else {
            console.log(`${who} has the power of ${power}`);
        }
    }

    activate('Superman', 'Fly');
    activate('Luis Villalobos');
    activate('Batman', 'Ghotic City', 'money');
})();
