import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public get(url) {
    this.http.get(url)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}
