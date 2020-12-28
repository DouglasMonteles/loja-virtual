import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../models/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${environment.baseURL}/categorias`);
  }

}
