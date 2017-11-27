import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(private_key: string, public_key: string) {
    return this.http.post('/api/authenticate',
      JSON.stringify({ private_key: private_key, public_key: public_key }),
      this.jwt())
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  private jwt() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    return new RequestOptions({ headers: headers });
  }
}
