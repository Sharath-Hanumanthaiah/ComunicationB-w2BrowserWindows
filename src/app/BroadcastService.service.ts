import { Injectable } from '@angular/core';

import { Subject, Subscription, Observable } from 'rxjs';


@Injectable({    
    providedIn :'root'
}
)
export class BroadcastService {
 
    public mapToParent = new Subject<any>()
    // mapToParent$ = this.mapToParent.asObservable();
    getSubject(): Observable<any>{
        return this.mapToParent.asObservable();
    }

}
export class MessageService{
    MessageFrom: String;
    MessageTo: String;
    MessageContent: String;

    constructor() {
        this.MessageFrom = "";
        this.MessageTo = "";
        this.MessageContent = "";
    }
 }