import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from '../environments/environment';

export const backendInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith("/")) {
    req = req.clone({
        url: environment.API_URL + req.url
      })
  }
  return next(req);
};
