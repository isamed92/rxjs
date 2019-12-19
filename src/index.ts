import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: err => console.warn('error:', err),
    complete: () => console.info('completed')
};


const intervalo$ = new Observable<number>(subscriber => {
    const intervalID = setInterval(()=> subscriber.next(Math.random()), 5000);
    return () => clearInterval(intervalID);
});
// Caracteristicas importantes
// 1. casteo multiple
// 2. tambien es un observer
// 3. se puede manejar next, error y complete
const subject$ = new Subject();
intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((resp) => console.log('subs1: ', resp) );
// const subs2 = intervalo$.subscribe((resp) => console.log('subs2: ', resp) );
const subs1 = subject$.subscribe((resp) => console.log('subs1: ', resp) );
const subs2 = subject$.subscribe((resp) => console.log('subs2: ', resp) );
