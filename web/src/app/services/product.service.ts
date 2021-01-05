import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  findById(id: number): Observable<ProductModel> {
    const path = `${environment.baseURL}/produtos/${id}`;
    return this.http.get<ProductModel>(path);
  }

  findByCategoria(categoriaId: number): Observable<ProductModel[]> {
    const path = `${environment.baseURL}/produtos/?categorias=${categoriaId}`;
    return this.http.get<ProductModel[]>(path);
  }

}
