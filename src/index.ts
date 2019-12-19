import { Observable } from 'rxjs';


// const observable$ =  Observable.create();
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('hola');
    subscriber.next('mundo');
    subscriber.next('hola');
    subscriber.next('mundo');
    subscriber.next('hola');

    subscriber.complete();
    subscriber.next('hola');
    subscriber.next('mundo');

});

obs$.subscribe(resultado => console.log(resultado));