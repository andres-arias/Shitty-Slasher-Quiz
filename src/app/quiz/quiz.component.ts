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
        question: 'Encuentra constantemente fotos o videos en su telefono que usted no tomo?',
        flavorText: 'La posibilidad de que un dia nos demos cuenta de que se murio es directamente proporcional a esa cantidad de fotos.',
        trope: 'Found Footage',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'En su barrio balean muy seguido a la gente?',
        flavorText: 'Uno de tantos va a volver por usted.',
        trope: 'Someone died here',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Usted se mira muy seguido en el espejo?',
        flavorText: 'Un dia de tantos, va a ver un reflejo que no va a reconocer.',
        trope: 'Looking into the mirror',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Usted es afrodescendiente?',
        flavorText: 'Esto no es una película de Jordan Peele.',
        trope: 'Black guy dies first',
        yesScore: 10,
        noScore: 0
      },
      {
        question: 'Se le gastan muy rapido los datos del celular?',
        flavorText: 'No pudo pedir ayuda por falta de datos y se lo rajaron.',
        trope: 'No signal',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Una persona que usted aprecia lo ha dejado mamando?',
        flavorText: 'Esa persona lo va a matar si fuera necesario para sobrevivir.',
        trope: 'Killing a loved one',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Ha tenido sexo premarital y en una posición que no sea el misionero?',
        flavorText: 'El sexo es inmoral y por eso lo van a matar luego de la innecesaria escena de sexo que nunca falta.',
        trope: 'Sex = Death',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Convive con chamacos menores de 12?',
        flavorText: 'Nunca, nunca los pierda de vista.',
        trope: 'Killer kids',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Su compu falla muy seguido?',
        flavorText: 'Un bicho esta intentando salir de ahi. Buena suerte. ',
        trope: 'Possesed technology',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Tiene que pedir Uber para ir a todo lado?',
        flavorText: 'Esa dependencia lo pone en bandeja de plata para el asesino',
        trope: 'We can’t leave',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Considera que usted esta riquisimo?',
        flavorText: 'Se lo volaron miher. Al mae en forma es el segundo o tercero al que el asesino se vuela.',
        trope: 'The Final Girl',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Se cae usted muy seguido?',
        flavorText: 'Que lastima que se caiga cuando un psicópata lo persiga con un cuchillo. RIP. ',
        trope: 'People falling too much',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Su carro falla con relativa frecuencia?',
        flavorText: 'Ah mae, va a fallar justo cuando necesite salir de ahi. Corra.',
        trope: 'The Car won’t start',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Le gustan los payasos?',
        flavorText: 'Si le gustan, ubiquese psicópata. WTF.',
        trope: 'Evil clown',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Usted da consejos que nadie sigue?',
        flavorText: 'Lo van a matar por ser el que sabe. Lo peor es que nadie se va a acordar que usted ya no esta.',
        trope: 'Crazy person no one believes',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Usted da consejos que nadie sigue?',
        flavorText: 'Lo van a matar por ser el que sabe. Lo peor es que nadie se va a acordar que usted ya no esta.',
        trope: 'Crazy person no one believes',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Pierde muy seguido las cosas?',
        flavorText: 'Pues se murio por no encontrar esa cosa a tiempo.',
        trope: 'Lost key items',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Se distrae mucho cuando limpia?',
        flavorText: 'Ese viejo diario que encontro debajo del tele tenia un hechizo diabólico. ',
        trope: 'Artifact of Doom',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Es usted de esos que unen partes de varias historias para entenderlo todo? ',
        flavorText: 'El conocimiento no siempre es poder, es mejor poder correr.',
        trope: 'Connect the dots',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Fue usted a un colegio catolico?',
        flavorText: 'Usted sabe muy bien cual es la mae muy religiosa que lo va a torturar.',
        trope: 'Creepy catholocism',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Usted es de los que llega tarde a todo lado?',
        flavorText: 'No solo mataron a esa persona, lo esperaron para fumarselo a usted también.',
        trope: 'Distress call',
        yesScore: 1,
        noScore: 0
      },
      {
        question: 'Tiene peluches, figuras de accion o munecos en su cuarto?',
        flavorText: 'Toy Story gone wrong.',
        trope: 'Haunted doll',
        yesScore: 1,
        noScore: 0
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

  retry() {
    location.reload();
  }

}