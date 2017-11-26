import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  key: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    console.log('this.model', this.model)
    this.userService.create(this.model.name, this.model.email)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.key = {
            privateKey: data.privateKey,
            publicKey: data.publicKey
          }
          var jsonse = JSON.stringify(this.key);
          var blob = new Blob([jsonse], {type: 'application/json'});
          var filename = 'key.json';
          saveAs(blob, filename);
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }
}
