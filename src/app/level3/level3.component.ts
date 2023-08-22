import { Component, OnInit } from '@angular/core';
import { User } from '../configs/types/user.type';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {
  users: Array<User> = [
    {
      name: 'Seven',
      level: 'Level 3',
      dob: 2005
    },
    {
      name: 'Academy',
      level: 'Level 3',
      dob: 2006
    },
    {
      name: 'Academy',
      level: 'Level 3',
      dob: 2006
    }
  ];

  ngOnInit(): void {}
}
