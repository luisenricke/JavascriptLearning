
const buttton = document.querySelector('button');

const observer = {
    next: function(value){
        console.log(value);
    },
    error: function(error) {
        console.error(error);
    },
    complete: function() {
        console.log('completed');
    }
};

/*
// Never end relation of observer
Rx.Observable.fromEvent(buttton, 'click')
.subscribe(observer);
*/

/*
// Simple sync observer
Rx.Observable.create(function(observe) {
    observe.next('A value');
    // observe.error('Finish obsevable');
    setTimeout(function() {
        observe.complete();
    }, 2000);

    observe.next('Try value');
})
.subscribe(observer);
*/

/*
// Recreate onClick event
Rx.Observable.create(function(observe) {
    buttton.onclick = function(event) {
        observe.next('Clicked in [' + event.clientX + '][' +event.clientY + ']');
    }
})
.subscribe(observer);
*/

// TimeOut suscription
const subscription = Rx.Observable.create(function(observe) {
    buttton.onclick = function(event) {
        observe.next('Clicked in [' + event.clientX + '][' +event.clientY + ']');
    }
})
.subscribe(observer);

setTimeout(function() {
    subscription.unsubscribe();
}, 5000);
