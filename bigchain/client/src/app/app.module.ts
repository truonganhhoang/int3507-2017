import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ScoreFormComponent } from './score-form/score-form.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    CourseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      //{ path: '', redirectTo: '/create_score', pathMatch: 'full' },
      {
        path: 'create_score',
        component: ScoreFormComponent
      },
      {
        path: 'course',
        component: CourseComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
