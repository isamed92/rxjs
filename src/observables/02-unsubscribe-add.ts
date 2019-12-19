import { Observable, Observer, observable } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: err => console.warn('error:', err),
    complete: () => console.info('completed')
};


const interval$ = new Observable<number>(subscriber => {
    // Crear un contador 1, 2, 3, 4, 5

    let contador: number = 0;
    
    const interevalo = setInterval(()=>{
        //cada segundo 
        contador++;
        subscriber.next(contador);
        console.log(contador);


    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interevalo);
        console.log('intervalo destruido');
    };

});


const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);


// Para encadenar observables
subscription1.add(subscription2)
             .add(subscription3);
setTimeout(()=>{
    subscription1.unsubscribe();
    // subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('completado timeout');
}, 6000)