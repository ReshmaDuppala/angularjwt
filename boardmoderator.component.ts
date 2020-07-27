import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-boardmoderator',
  templateUrl: './boardmoderator.component.html',
  styleUrls: ['./boardmoderator.component.css']
})
export class BoardmoderatorComponent implements OnInit {

  content: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
