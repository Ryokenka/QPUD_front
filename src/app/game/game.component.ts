import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  theme: string | null = null;
  currentQuestion: any = null;
  feedback: string | null = null;
  score: number = 0;  // Variable pour le score
  questionCount: number = 0;  // Compteur de questions


  constructor(private quizService: QuizService) {}

  chooseTheme() {
    this.theme = prompt('Entrez un thème suivant: Science, Histoire, Mathématiques, Littérature .)') || null;
    if (this.theme) {
      this.loadQuestion();
    }
  }

  loadQuestion() {
    if (this.theme && this.questionCount < 11) {  // Limiter à 10 questions
      this.currentQuestion = this.quizService.getRandomQuestion(this.theme);
      this.questionCount++;  // Incrémenter le compteur de questions
    } else {

      this.feedback = `Votre score final est ${this.score} sur 10.`;
    }
    this.feedback = null;
  }

  checkAnswer(selectedOption: string) {
    if (this.currentQuestion.correctAnswer === selectedOption) {
      this.feedback = 'Bonne réponse !';
      this.score++;  // Incrémenter le score
    } else {
      this.feedback = 'Mauvaise réponse';
    }
    setTimeout(() => this.loadQuestion(), 1000);
  }


}
