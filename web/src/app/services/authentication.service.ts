import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalUser } from '../models/local-user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) { }

  authenticate(loginCreds: LoginModel): Observable<HttpResponse<void>> {
    const path = `${environment.baseURL}/login`;
    return this.http.post<void>(path, loginCreds, {
      observe: 'response',
    });
  }

  successfullLogin(authorization: string): void {
    const token = authorization.substring(7); // Remove o 'Bearer '
    const user: LocalUser = {
      token,
    };

    this.storage.setLocalUser(user);
  }

  logout(): void {
    this.storage.setLocalUser(null);
  }
}
