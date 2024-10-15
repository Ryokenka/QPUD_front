import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epf-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.scss']
})
export class SoloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const form = document.getElementById('quiz-form') as HTMLFormElement;

    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const pseudo = (document.getElementById('pseudo') as HTMLInputElement).value;
      const nombreQuestions = (document.getElementById('nombre-questions') as HTMLSelectElement).value;
      const niveau = (document.getElementById('niveau') as HTMLSelectElement).value;
      const classe = (document.getElementById('classe') as HTMLSelectElement).value;

      console.log(`Pseudo: ${pseudo}`);
      console.log(`Nombre de questions: ${nombreQuestions}`);
      console.log(`Niveau: ${niveau}`);
      console.log(`Classe: ${classe}`);

      alert(`Préparation du quiz pour ${pseudo} avec ${nombreQuestions} questions de niveau ${niveau} en ${classe}`);
    });

  }

}
