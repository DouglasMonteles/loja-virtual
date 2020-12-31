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
    this.message.showMessage(data.error.message, true);
    console.log(data);
    let intercepError = data;

    if (intercepError.error) {
      intercepError = intercepError.error;
    }

    if (!intercepError.status) {
      intercepError = JSON.parse(intercepError);
    }

    console.log('Erro intercaptado: ' + intercepError);

    switch (intercepError.status) {
      case 403:
        this.handle403();
        break;
    }

    return Observable.throw(intercepError);
  }

  handle403(): void {
    this.storage.setLocalUser(null);
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};