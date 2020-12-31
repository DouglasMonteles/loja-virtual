import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { ClienteModel } from '../models/cliente.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) { 
    this.getToken();
  }

  getToken(): HttpHeaders {
    const token = this.storage.getLocalUser().token;
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });
  }

  findByEmail(email: string): Observable<ClienteModel> {
    const path = `${environment.baseURL}/clientes/email?value=${email}`;
    return this.http.get<ClienteModel>(path, {
      headers: this.getToken(),
    });
  }

  getClientImage(image: string): Observable<any> {
    const path = `${environment.baseURL}/clientes/picture/${image}`;
    return this.http.get(path, {
      responseType: 'blob',
      headers: this.getToken(),
    });
  }

}
