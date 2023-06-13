import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
   dataEmitter=new EventEmitter<any>();
   raiseEventEmitter(data:any){
      this.dataEmitter.emit(data);
   }
}
