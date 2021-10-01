import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        
        if ( localStorage.getItem("jwt") == null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem("guestjwt")}`
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
        }

        return next.handle(request);
    }
}