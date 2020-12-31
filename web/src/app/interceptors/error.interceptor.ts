import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Passou no interceptor de erro');
    return next.handle(req).subscribe({
      error: (data) => {
        let intercepError = data;

        if (intercepError.error) {
          intercepError = intercepError.error;
        }

        if (!intercepError.status) {
          intercepError = JSON.parse(intercepError);
        }

        console.log('Erro intercaptado: ' + intercepError);

        return Observable.throw(intercepError);
      }
    }) as any;
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};