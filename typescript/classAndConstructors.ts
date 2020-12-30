(() => {

    /*
    // Simple class declaration
    class Avenger {
        nickname: string;
        position: string;
        name: string;
        isFighter?: boolean;
        winners: number;

        constructor(nickname: string, position: string, name?: string, winners?: number) {
            this.nickname = nickname;
            this.position = position;
            this.name =  name ?? 'unknown';
            this.winners = winners ?? 0;
        }
    };
    */

    // Short class declaration
    class Avenger {
        constructor(
            public nickname: string,
            public position: string,
            public winners: number = 0,
            public name?: string,
            public isFighter?: boolean
        ) {}
    };

    const thor = new Avenger('Thor', 'Lead');
     const groot = new Avenger('Groot', 'Defensive', 100, 'Groot');

    console.log(thor);
    console.log(groot);

})();
