import { HTTP_INTERCEPTORS, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const loginService = inject(LoginService);
  const token = loginService.getToken();
  let authReq = req;
  if (token != null) {
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
  }
  return next(authReq);

};
/*
export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: authInterceptor,
    multi: true
  }];
*/