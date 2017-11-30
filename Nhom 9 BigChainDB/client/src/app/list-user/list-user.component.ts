import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  list_user = [];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.userService.listUser().subscribe((users) => {
      console.log(users);
      this.list_user = users;
    });
  }

}
