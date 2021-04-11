import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPro } from 'src/app/model/interfaces/ipro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IPro[]> {
    return this._http.get<IPro[]>(`${environment.ApiUrl}/product`);
  }

  getProductByID(id): Observable<IPro> {
    return this._http.get<IPro>(`${environment.ApiUrl}/product/${id}`)
  }

  insertProduct(prd: IPro): Observable<IPro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this._http.post<IPro>(`${environment.ApiUrl}/product`, prd, httpOptions)
  }}
