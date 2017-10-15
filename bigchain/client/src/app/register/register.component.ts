import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model.name, this.model.email)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }
}
