import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Score } from '../_models/score.model';

@Component({
  selector: 'score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit {

  score = new Score('', '', '', 0, 0);

  constructor(public http: Http) { }

  ngOnInit() {
  }

  saveScore() {
    let body = JSON.stringify(this.score);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    // var headers = new Headers();
    // headers.append("Content-Type", 'application/json');
    // headers.append('Access-Control-Allow-Origin','*');
    // var options = new RequestOptions({ headers: headers });
    this.http.post("/api/create", body, options).map(resp => resp.json())
      .subscribe((resp) => {
        console.log(resp);
    });
  }

  get currentScore() { return JSON.stringify(this.score); }

}
