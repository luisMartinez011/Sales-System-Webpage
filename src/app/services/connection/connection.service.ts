import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public url = "https://localhost:7092";
  constructor(private http: HttpClient) { }

  getConnection(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/api/clientes`)
  }
}
