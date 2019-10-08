import { Injectable } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Regle } from 'src/app/shared/regle/regle';


const API=constants.api +'regleCms/'
@Injectable({
  providedIn: 'root'
})
export class RegleCmsService {

  constructor(private http:HttpClient) { }

  addRule(data) {
    return this.http.post(`${API}`, data)
      .pipe(
        tap(_ => this.log('add rule')),
        catchError(this.handleError('add rule', []))
      );
  }

  getRules() {
    return this.http.get(`${API}`)
      .pipe(
        tap(_ => this.log('add rule')),
        catchError(this.handleError('add rule', []))
      );
  }

  getRulesByOrder(): Observable<Regle[]> {
    return this.http.get<Regle[]>(`${API}byorder`)
      .pipe(
        tap(_ => this.log('get rule by order')),
        catchError(this.handleError('get rule by order', []))
      );
  }

  updateRule(id, data) {
    return this.http.put(`${API}${id}`, data)
      .pipe(
        tap(_ => this.log('update rule')),
        catchError(this.handleError('update rule', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
