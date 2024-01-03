import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface Message {
  type: string | null;
  payload?: any;
}

@Injectable({
  providedIn: 'root',
})

export class MainService {
  messageSubject = new Subject<Message>();

  dispatch = (obj: Message) => {
    console.log(obj)
    this.messageSubject.next(obj);
  };

  this.messageSubject.subscribe({
    next: (v:any) => console.log(`observerB: ${v}`),
  })

}


// constructor() { }

// generic type message emitter

