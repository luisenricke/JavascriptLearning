(() => {

    /*
    // Bad ❌
    const sendHeroe = (hero: any) => {
        console.log(`Sending a ${hero.name} for the mission`);
    };
    */

    /*
    // Code smell 💩
    const sendHeroe = (hero: {name: string}) => {
        console.log(`Sending a ${hero.name} for the mission`);
    };
    */

    interface Hero {
        name: string;
        power: number;
        age?: number;
    };

    const sendHeroe = (hero: Hero) => {
        console.log(`Sending a ${hero.name} for the mission`);
    };


    const spiderman: Hero = {
        name: 'spiderman',
        power: 100
    };


    sendHeroe(spiderman);
})();
