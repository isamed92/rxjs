import { Observable, Observer, observable } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]:', err),
    complete: () => console.info('[completed]')
};


