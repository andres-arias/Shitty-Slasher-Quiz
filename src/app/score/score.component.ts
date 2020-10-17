import { Component, OnInit } from '@angular/core';
import { VictimsService } from '../service/victims.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(
    public victimsService: VictimsService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  start() {
    this.router.navigate(['/']);
  }

}
