import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from 'src/app/models/client';
import { catchError, retry, tap } from 'rxjs/operators';
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
export class SalesService {

  public url = "https://localhost:7092/api/clientes";
  private _refresh$ = new Subject<void>();
  public concepto = new BehaviorSubject<Concepto[]>([]);

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getConcepto() {
    return this.concepto.asObservable();
  }

  addConcepto(data: Concepto[]) {
    this.concepto.next(data);
  }

}
