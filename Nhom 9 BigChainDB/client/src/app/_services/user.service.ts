import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  create(name: string, email: string) {
    console.log('name', name);
    console.log('email', email);
    let body = JSON.stringify({is_lec: false, name: name, email: email });
    return this.http.post('/api/create_user', body, this.jwt())
      .map((response: Response) => response.json());
  }

  listUser() {
    return this.http.get('/api/users', this.jwt())
      .map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if (currentUser && currentUser.token) {
        headers.append('x-access-token', currentUser.token);
    }
    return new RequestOptions({ headers: headers });
  }
}
