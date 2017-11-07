import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  currentUser: any;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    // $.getScript('./js/jquery.app.js');
    $(document).ready(function(){
      $("button.button-menu-mobile.open-left").click(function(){
        if ($("#wrapper").hasClass("enlarged")) {
          $("#wrapper").removeClass("enlarged")
        } else {
          $("#wrapper").addClass("enlarged");
        }
      });
});
  }

}
