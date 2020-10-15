import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { Question } from '../models/question';
import { Victim } from '../models/victim';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questionsForm = new FormArray([]);
  public questions: Question[]
  public victims: Victim[];
  public currentQuestion: number;
  showScore: boolean = false;

  constructor() {
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
    this.victims = [
      {
        name: 'Andres',
        score: 100
      },
      {
        name: 'Gloriana',
        score: 100
      }
    ];

    this.currentQuestion = 0;
  }

  ngOnInit(): void {
    this.buildVictims();
  }

  getVictim(index: number) {
    return this.victims[index].name;
  }

  buildVictims() {
    this.victims.forEach(victim => {
      this.questionsForm.push(new FormControl(false));
    });
  }

  calculateScore() {
    for (let victim = 0; victim < this.victims.length; victim++) {
      if (this.questionsForm.value[victim]) {
        this.victims[victim].score += this.questions[this.currentQuestion].yesScore
      } else {
        this.victims[victim].score += this.questions[this.currentQuestion].noScore
      }
      console.log(this.victims);
      this.showScore = true;
    }
  }

  nextQuestion() {
    this.questionsForm = new FormArray([]);
    this.showScore = false;
    this.buildVictims();
    this.currentQuestion++;
  }

}