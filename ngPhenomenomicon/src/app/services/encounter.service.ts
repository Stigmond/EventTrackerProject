import { environment } from './../../environments/environment';
import { Encounter } from './../models/encounter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  // private baseUrl = 'http://localhost:8085/';
  baseUrl = environment.baseUrl;
  url = this.baseUrl + 'api/encounter';


  constructor(private http: HttpClient) { }

  public index(): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EncounterService.index() Error');
        })
      );
  }

  public create(newEncounter: Encounter): Observable<Encounter> {
      const httpOptions = {
        headers: {
          'Content-type': 'application/json'
        }
      };

    return this.http.post<Encounter>(this.url, newEncounter, httpOptions).pipe(
      catchError((err:any) => {
        console.log(err);
        return throwError('EncounterService.create(): Error Adding Encounter');
      })
    );
  }



  public update(encounterId: number, updatedEncounter: Encounter) {

    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    return this.http.put<Encounter>(`${this.url}/${encounterId}`, updatedEncounter, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('TodoService.index(): Error updating todo');
      })
    );
  }


  public destroy(encounterId: number): Observable<boolean> {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };

      return this.http.delete<boolean>(`${this.url}/${encounterId}`, httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('EncounterService.destroy(): Error Deleting Encounter');
        })
      );

      }



 }
