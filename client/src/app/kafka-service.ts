import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EVENT_DATA } from './mock';

@Injectable({
  providedIn: 'root'
})
export class KafkaService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Observable<any> {

    //return of(EVENT_DATA);
    return this.http.get<any>('http://localhost:9999/');
    
}
}
