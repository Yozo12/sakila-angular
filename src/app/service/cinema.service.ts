import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }
  allActor(): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/gatallactor', { observe: 'response' })
    return resp;
  }

  actor(actor_id: number): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/actor?actor_id=' + actor_id, { observe: 'response' })
    return resp;
  }

  allFilm(actor_id: number): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/filmbyactor?actor_id=' + actor_id, { observe: 'response' })
    return resp;
  }
}

