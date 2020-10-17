import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VictimGuard } from './guards/victim-guard.service';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [VictimGuard] },
  { path: 'score', component: ScoreComponent, canActivate: [VictimGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
