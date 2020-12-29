import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
  ) { }

  authenticate(loginCreds: LoginModel): Observable<HttpResponse<void>> {
    const path = `${environment.baseURL}/login`;
    return this.http.post<void>(path, loginCreds, {
      observe: 'response',
    });
  }
}
