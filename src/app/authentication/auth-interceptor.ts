// src/app/authentication/auth-interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();  // Get the JWT token from the AuthService
        if (authToken) {
            // Clone the request and add the Authorization header with the token
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
            return next.handle(clonedReq);  // Pass the cloned request to the next handler
        }
        return next.handle(req);  // No token, just proceed with the original request
    }
}