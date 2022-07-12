import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/models/client';
import { catchError, retry, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  public url = "https://localhost:7092/api/clientes";
  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getConnection(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`)
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}`, client, httpOptions)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

}
