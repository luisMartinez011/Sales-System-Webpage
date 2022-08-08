import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public url = `${environment.URL}/Productos`;
  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }




  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url)
  }

  addProducts(product: Producto): Observable<Producto> {
    return this.http.post<any>(this.url, product)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  updateProducts(product: Producto): Observable<Producto> {
    const url = `${this.url}/${product.id}`;
    return this.http.put<Producto>(url, product)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  deleteProducts(id: number): Observable<unknown> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

}
