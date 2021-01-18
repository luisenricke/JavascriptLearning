
const buttton = document.querySelector('button');


Rx.Observable.fromEvent(buttton, 'click')
.throttleTime(1000) // wait time to handle other click
.map( (data) => { return [data.clientX, data.clientY]}) // handle the information passed
.subscribe( (xy) => console.log(xy[0] + ' - ' + xy[1]) );
