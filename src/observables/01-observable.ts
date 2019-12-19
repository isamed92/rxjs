import { Observable, Observer, observable } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]:', err),
    complete: () => console.info('[completed]')
};


// const observable$ =  Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('hola');
    subscriber.next('mundo');
    subscriber.next('hola');
    subscriber.next('mundo');
    subscriber.next('hola');
    

    //Forced error
    // const a = undefined;
    // a.nombre = 'isaias';

    subscriber.complete();
    subscriber.next('hola');
    subscriber.next('mundo');

});

// obs$.subscribe(
//     (value) => {console.log('next: ', value);},
//     (error) => {console.warn('error: ', error);},
//     () => {console.info('complete');}
// );

// obs$.subscribe(observer);