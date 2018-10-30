import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment as env} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {


  intercept(resp: HttpResponse<any>, next: HttpHandler): any {
    console.log(resp);
  }
}
