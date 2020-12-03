import { Encounter } from './../models/encounter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/encounter';

  constructor(private http: HttpClient) { }

  index(): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EncounterService.index() Error');
        })
      );
  }


  public create() {

  }

  public update() {

  }

  public destroy() {

  }
}
