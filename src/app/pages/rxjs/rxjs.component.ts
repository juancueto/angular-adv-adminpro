import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
    // obs$
    // this.retornaObservable()
    // .pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   { 
    //     next: (valor) => console.log(valor),
    //   // valor => console.log('Subs:', valor),
    //     error: (err) => console.warn('Error', err),
    //   // err => console.warn('Error: ', err),
    //     complete: () => console.info('Obs terminado')
    //   }
    // );

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(console.log);
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo () : Observable<number> {
    // const intervalo$ = interval(1000)
    //   .pipe(
    //     take(4),
    //     map(valor => valor + 1)
    //     // map(valor => 'Hola mundo ' + valor)
    //     // map(valor => {
    //     //   // return valor + 1;
    //     //   return 'Hola mundo ' + valor;
    //     // })
    //   );
    // return intervalo$;
    return interval(100)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter(valor => valor % 2 !== 0),
      );
  }

  retornaObservable() : Observable<number> {
    let i = -1;
    
    // const obs$ = 
    return new Observable<number>( observer => {
      const intervalo = setInterval(() => {
        // console.log('tick');
        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2){
          // i = 0;
          observer.error('I llego a 2');
        }
      }, 1000);
    });

    // return obs$;
  }
}
