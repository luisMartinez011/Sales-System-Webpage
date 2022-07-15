import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Client } from 'src/app/models/client';
import { Concepto } from 'src/app/models/concepto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public url = "https://localhost:7092/api/clientes";
  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getConnection(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`)
  }

  addClient(conceptos: Concepto[]) {
    this.http.post(`${this.url}`, {
      "name": "servicio"
    }, httpOptions)
  }
}
