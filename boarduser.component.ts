import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-boarduser',
  templateUrl: './boarduser.component.html',
  styleUrls: ['./boarduser.component.css']
})
export class BoarduserComponent implements OnInit {
  content = '';
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  }


