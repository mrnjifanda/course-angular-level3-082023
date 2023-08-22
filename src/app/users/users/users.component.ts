import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any> = [];
  constructor (
    private userService: UsersService
  ) {}

  ngOnInit() {

    this.users = this.userService.users;
  }

  addNewUser () {
    this.userService.addUser();
  }
}
