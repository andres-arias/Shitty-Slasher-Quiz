import { Injectable } from '@angular/core';
import { Victim } from '../models/victim';

@Injectable({
  providedIn: 'root'
})
export class VictimsService {
  done: boolean = false;
  victims: Victim[];

  constructor() {
    this.victims = [];
  }

  public getVictims(): Victim[] {
    return this.victims;
  }
  
  public addVictims(userList: string[]) {
    userList.forEach(user => {
      this.victims.push({
        name: user,
        score: 0,
        alive: true
      });
    });
  }

  public getScore(name: string) {
    this.victims.forEach(victim => {
      if (victim.name == name) return victim.score;
    });
  }

  public changeScore(name: string, score: number) {
    this.victims.forEach(victim => {
      if (victim.name == name && victim.score <= 5) {
        victim.score = victim.score + score;
        if (victim.score > 5)
          victim.alive = false; 
      }
    });
  }

  public isValid() {
    return this.victims.length > 0;
  }

}
