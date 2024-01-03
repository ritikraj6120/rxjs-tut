import { MainService } from '../Observables/main.service';
// import {}

export class Main {
  constructor(public ms:MainService){}
  this.ms.messageSubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    })
}


  //   value => {
  //   console.log("value")
  // }
// );
