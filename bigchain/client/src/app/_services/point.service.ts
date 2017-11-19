import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PointService {
  constructor(private http: Http) { }

  current_point() {
    return this.http.get('/api/current', this.jwt())
      .map((response: Response) => response.json());
  }


  create_point() {
    return this.http.get('/api/create', this.jwt())
      .map((response: Response) => response.json());
  }

  transfer_point(receiver, point) {
    return this.http.post('/api/transfer', {
      receiver: receiver,
      point: point
    }, this.jwt())
      .map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'x-access-token': currentUser.token });
        return new RequestOptions({ headers: headers });
    }
  }
}
