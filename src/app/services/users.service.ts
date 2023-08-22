import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<any> = [
    {
      id: 1,
      name: 'Seven Academy',
      email: 'info@seven.com',
      image: 'empty'
    },
    {
      id: 2,
      name: '2 Seven Academy',
      email: '2 info@seven.com',
      image: 'empty'
    },
    {
      id: 3,
      name: '3 Seven Academy',
      email: '3 info@seven.com',
      image: 'empty'
    }
  ];


  addUser() {
    this.users.push({
      id: 123,
      name: 'Name',
      email: 'email@gmail.com',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg',
      birthday: '2005',
    })
  }
}
