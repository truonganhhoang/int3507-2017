import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course_id = '';
  students = [];

  constructor(public http: Http) { }

  ngOnInit() {
  }

  search() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    // var headers = new Headers();
    // headers.append("Content-Type", 'application/json');
    // headers.append('Access-Control-Allow-Origin','*');
    // var options = new RequestOptions({ headers: headers });
    this.http.get("/api/listScore/course=" + this.course_id, options).map(resp => resp.json())
      .subscribe((resp) => {
        this.students = resp;

    });
  }

}
