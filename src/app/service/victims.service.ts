import { Injectable } from '@angular/core';
import { Victim } from '../models/victim';

@Injectable({
  providedIn: 'root'
})
export class VictimsService {
  victims: Victim[];

  constructor() {
    this.victims = [];
  }

  addVictims(userList: string[]) {
    userList.forEach(user => {
      this.victims.push({
        name: user,
        score: 100
      })
    });
  }

  isValid() {
    return this.victims.length > 0;
  }
}
