import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
   
      const authReq = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
      // send cloned request with header to the next handler.
      return next.handle(authReq);

  }
}
