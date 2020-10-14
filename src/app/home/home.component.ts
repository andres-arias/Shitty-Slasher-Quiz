import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public victimsCount: number = 0;
  victimsForm = new FormArray([]);

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addVictim() {
    this.victimsCount++;
    this.victimsForm.push(new FormControl(''));
  }

  removeVictim() {
    if (this.victimsCount != 0) {
      this.victimsCount--;
    }
    this.victimsForm.removeAt(this.victimsCount - 1);
  }

  removeAll() {
    this.victimsForm.clear();
    this.victimsCount = 0;
  }

  start() {
    this.userService.addUsers(this.victimsForm.value);
    this.router.navigate(['/quiz']);
  }
}
