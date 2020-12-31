import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { catchError } from 'rxjs/operators';
import { HandleMessageService } from '../services/handle-message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private storage: StorageService,
    private message: HandleMessageService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Passou no interceptor de erro');
    return next.handle(req).pipe(
      catchError(data => this.handleError(data)),
    );
  }

  handleError(data) {
    console.log(data);
    let intercepError = data;

    if (intercepError.error) {
      intercepError = intercepError.error;
    }

    if (!intercepError.status) {
      intercepError = JSON.parse(intercepError);
    }

    switch (intercepError.status) {
      case 401: 
        this.handle401(data);
      break;

      case 403:
        this.handle403();
      break;

      default: 
        this.handleDefaultError(data);
    }

    return Observable.throw(intercepError);
  }

  handle401(data): void {
    this.message.showMessage(data.error.message, true);
  }

  handle403(): void {
    this.storage.setLocalUser(null);
  }

  handleDefaultError(data): void {
    this.message.showMessage(data.error.message, true);
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};