import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>{{title}}</h1>
  //   <a routerLink="/create_score">Create score</a>&nbsp;&nbsp;&nbsp;
  //   <a routerLink="/course">Course</a>
  //   <router-outlet></router-outlet>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score System';
}
