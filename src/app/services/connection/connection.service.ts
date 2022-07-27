import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Client } from 'src/app/models/client';
import { Concepto } from 'src/app/models/concepto';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    "Ocp-Apim-Subscription-Key": environment.KEY
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public url = `${environment.URL}/clientes`;
  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getConnection(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`)
  }

  addClient(conceptos: Concepto[], clientName: string, total: number) {
    let now = formatDate(Date.now(), 'yyyy-MM-dd', "en-US");
    return this.http.post(`${this.url}`, {
      name: clientName,
      venta: [{
        fecha: now,
        total: total,
        conceptos: conceptos
      }]
    }, httpOptions)
  }
}
