import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VictimsService {
  victims: Object = {

  };

  constructor() {
  }

  addVictims(userList: string[]) {
    userList.forEach(user => {
      this.victims[user] = 100;
    });
  }

  getScore(name: string) {
    return this.victims[name];
  }

  changeScore(name: string, score: number) {
    this.victims[name] += score;
  }

  isValid() {
    return Object.keys(this.victims).length > 0;
  }
}
