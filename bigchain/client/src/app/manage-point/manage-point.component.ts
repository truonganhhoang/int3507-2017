import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service';
import { PointService } from '../_services/point.service';

@Component({
  selector: 'app-manage-point',
  templateUrl: './manage-point.component.html',
  styleUrls: ['./manage-point.component.css']
})
export class ManagePointComponent implements OnInit {
  current_user: any;
  current_point: any;
  list_user = [];
  processing: boolean = false;
  receiver: any;

  constructor(
    private userService: UserService,
    private pointService: PointService) { }

  ngOnInit() {
    this.current_user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.current_user);
    this.pointService.current_point().subscribe((res) => {
      console.log(res);
      this.current_point = res;
    });
    this.userService.listUser().subscribe((users) => {
      console.log(users);
      this.list_user = users;
    });
  }

  create_point(number_point) {
    this.processing = true;
    this.pointService.create_point(number_point).subscribe((res) => {
      this.pointService.current_point().subscribe((res) => {
        this.current_point = res;
        this.processing = false;
      });
    });
  }

  show_transfer_modal(user) {
    this.receiver = user;
  }

  transfer_point(number_points, receiver) {
    console.log(receiver);
    this.processing = true;
    this.pointService.transfer_point(receiver.publicKey, number_points).subscribe((res) => {
      console.log(res);
      this.pointService.current_point().subscribe((res) => {
        this.current_point = res;
        this.processing = false;
      });
    });
  }

}
