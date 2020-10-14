import { Injectable } from '@angular/core';
import { Victim } from './models/victim';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Victim[];

  constructor() {
    this.users = [];
  }

  addUsers(userList: string[]) {
    userList.forEach(user => {
      this.users.push({
        name: user,
        score: 100
      })
    });
  }

  isValid() {
    return this.users.length > 0;
  }
}
