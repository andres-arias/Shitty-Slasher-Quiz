import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../models/question';
import { VictimsService } from '../service/victims.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionsForm = new FormArray([]);
  public questions: Question[]
  public currentQuestion: number;
  showScore: boolean = false;

  constructor(
    private router: Router,
    public victimsService: VictimsService 
  ) {
    this.questions = [
      {
        question: 'Es usted afrodescendiente?',
        flavorText: 'Lastima que esto no es una pelicula de Jordan Peele',
        yesScore: -100,
        noScore: 10
      },
      {
        question: 'Es usted mujer y no se encuentra en una relacion monogamica?',
        flavorText: 'Si respondio si, preparese para morir luego de una innecesaria escena de sexo',
        yesScore: -50,
        noScore: 10
      }
    ]

    this.currentQuestion = 0;
  }

  ngOnInit(): void {
    this.buildVictims();
  }

  getVictim(index: number) {
    return this.victimsService.getVictims()[index];
  }

  buildVictims() {
    this.victimsService.getVictims().forEach(victim => {
      this.questionsForm.push(new FormControl(false));
    });
  }

  calculateScore() {
    for (let victim = 0; victim < this.victimsService.getVictims().length; victim++) {
      if (this.questionsForm.value[victim]) {
        this.victimsService.changeScore(this.victimsService.getVictims()[victim].name,
                                        this.questions[this.currentQuestion].yesScore);
      } else {
        this.victimsService.changeScore(this.victimsService.getVictims()[victim].name,
                                        this.questions[this.currentQuestion].noScore);
      }
      console.log(this.victimsService.getVictims()[0].score)
      this.showScore = true;
    }
  }

  nextQuestion() {
    this.questionsForm = new FormArray([]);
    this.showScore = false;
    this.buildVictims();
    this.currentQuestion++;
  }

  finish() {
    this.router.navigate(['/score']);
  }

}