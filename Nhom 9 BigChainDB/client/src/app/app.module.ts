import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ScoreFormComponent } from './score-form/score-form.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { PointService } from './_services/point.service';

import { LayoutComponent } from './layout/layout.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ManagePointComponent } from './manage-point/manage-point.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    ListUserComponent,
    ManagePointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'list_user',
            component: ListUserComponent
          },
          {
            path: 'create_score',
            component: ScoreFormComponent
          },
          {
            path: 'course',
            component: CourseComponent
          },
          {
            path: 'manage_point',
            component: ManagePointComponent
          },
        ]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    PointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
