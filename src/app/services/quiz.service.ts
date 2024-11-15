import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions: { [key: string]: { question: string; options: string[]; correctAnswer: string }[] } = {
    Littérature: [
      {
        question: 'Qui a écrit "Les Misérables" ?',
        options: ['Victor Hugo', 'Émile Zola', 'Marcel Proust', 'Gustave Flaubert'],
        correctAnswer: 'Victor Hugo',
      },
      {
        question: 'Quel est le titre du premier livre de J.K. Rowling ?',
        options: ['Harry Potter à l\'école des sorciers', 'Les Contes de Beedle le Barde', 'Le Seigneur des Anneaux', 'La Chambre des Secrets'],
        correctAnswer: 'Harry Potter à l\'école des sorciers',
      },
      {
        question: 'Dans quelle œuvre trouve-t-on le personnage de Don Quichotte ?',
        options: ['Don Quichotte de la Manche', 'Les Misérables', 'Le Cid', 'La Divine Comédie'],
        correctAnswer: 'Don Quichotte de la Manche',
      },
      {
        question: 'Quel est le nom de l\'auteur de "Le Petit Prince" ?',
        options: ['Antoine de Saint-Exupéry', 'Marcel Proust', 'Albert Camus', 'François Mauriac'],
        correctAnswer: 'Antoine de Saint-Exupéry',
      },
      {
        question: 'Qui est l\'auteur de "Germinal" ?',
        options: ['Émile Zola', 'Honoré de Balzac', 'Gustave Flaubert', 'Maupassant'],
        correctAnswer: 'Émile Zola',
      },
      {
        question: 'Quel écrivain a écrit "L\'Étranger" ?',
        options: ['Albert Camus', 'Jean-Paul Sartre', 'Simone de Beauvoir', 'Maurice Blanchot'],
        correctAnswer: 'Albert Camus',
      },
      {
        question: 'Dans quel roman apparaît le personnage de Sherlock Holmes ?',
        options: ['Les Aventures de Sherlock Holmes', 'Le Chien des Baskerville', 'L\'Île au Trésor', 'Le Dernier des Mohicans'],
        correctAnswer: 'Les Aventures de Sherlock Holmes',
      },
      {
        question: 'Quel est le nom du narrateur de "Moby Dick" ?',
        options: ['Ishmael', 'Herman', 'Ahab', 'Melville'],
        correctAnswer: 'Ishmael',
      },
      {
        question: 'Dans quelle ville se déroule l\'action de "Les Fleurs du mal" de Baudelaire ?',
        options: ['Paris', 'Londres', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
      },
      {
        question: 'Quel écrivain a écrit "1984" ?',
        options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Kurt Vonnegut'],
        correctAnswer: 'George Orwell',
      }
    ],
    Mathématiques: [
      {
        question: 'Quelle est la valeur de Pi (π) approximativement ?',
        options: ['3.14', '2.71', '1.62', '1.41'],
        correctAnswer: '3.14',
      },
      {
        question: 'Quel est le résultat de 7 × 9 ?',
        options: ['56', '63', '72', '81'],
        correctAnswer: '63',
      },
      {
        question: 'Quelle est la formule de l\'aire d\'un cercle ?',
        options: ['πr²', '2πr', 'πd', 'r²'],
        correctAnswer: 'πr²',
      },
      {
        question: 'Combien de côtés a un triangle équilatéral ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '3',
      },
      {
        question: 'Quel est le résultat de 12 ÷ 4 ?',
        options: ['2', '3', '4', '6'],
        correctAnswer: '3',
      },
      {
        question: 'Quelle est la somme des angles d\'un triangle ?',
        options: ['90°', '180°', '270°', '360°'],
        correctAnswer: '180°',
      },
      {
        question: 'Quel est le carré de 15 ?',
        options: ['225', '2250', '50', '15'],
        correctAnswer: '225',
      },
      {
        question: 'Que représente le "Δ" en géométrie ?',
        options: ['Un cercle', 'Un triangle', 'Un carré', 'Un rectangle'],
        correctAnswer: 'Un triangle',
      },
      {
        question: 'Quelle est la formule pour calculer l\'aire d\'un rectangle ?',
        options: ['Longueur × Largeur', 'Longueur + Largeur', 'Longueur ÷ Largeur', 'Largeur × Hauteur'],
        correctAnswer: 'Longueur × Largeur',
      },
      {
        question: 'Combien y a-t-il de nombres premiers entre 1 et 10 ?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
      }
    ],
    Science: [
      {
        question: 'Qui a formulé la loi de la gravitation universelle ?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nicolas Copernic'],
        correctAnswer: 'Isaac Newton',
      },
      {
        question: 'Quel est l\'élément chimique dont le symbole est O ?',
        options: ['Oxygène', 'Or', 'Ozone', 'Osmium'],
        correctAnswer: 'Oxygène',
      },
      {
        question: 'Quel est le plus grand organe du corps humain ?',
        options: ['La peau', 'Le cœur', 'Le foie', 'Les poumons'],
        correctAnswer: 'La peau',
      },
      {
        question: 'Quelle est la formule chimique de l\'eau ?',
        options: ['H2O', 'CO2', 'O2', 'CH4'],
        correctAnswer: 'H2O',
      },
      {
        question: 'Qui a découvert la pénicilline ?',
        options: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Joseph Lister'],
        correctAnswer: 'Alexander Fleming',
      },
      {
        question: 'Quel est l\'élément chimique le plus abondant dans l\'univers ?',
        options: ['Hydrogène', 'Hélium', 'Oxygène', 'Carbone'],
        correctAnswer: 'Hydrogène',
      },
      {
        question: 'Qui a proposé la théorie de la relativité ?',
        options: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Max Planck'],
        correctAnswer: 'Albert Einstein',
      },
      {
        question: 'Quelle est la vitesse de la lumière dans le vide ?',
        options: ['300 000 km/s', '150 000 km/s', '299 792 km/s', '3 000 km/s'],
        correctAnswer: '299 792 km/s',
      },
      {
        question: 'Quel est le gaz majoritaire dans l\'atmosphère terrestre ?',
        options: ['Oxygène', 'Azote', 'Dioxyde de carbone', 'Argon'],
        correctAnswer: 'Azote',
      },
      {
        question: 'Quel est l\'instrument utilisé pour observer les étoiles ?',
        options: ['Microscope', 'Télescope', 'Periscopes', 'Baromètre'],
        correctAnswer: 'Télescope',
      }
    ],
    Histoire: [
      {
        question: 'Qui a découvert l\'Amérique ?',
        options: ['Christophe Colomb', 'Vasco de Gama', 'Marco Polo', 'Magellan'],
        correctAnswer: 'Christophe Colomb',
      },
      {
        question: 'En quelle année la Tour Eiffel a-t-elle été construite ?',
        options: ['1889', '1900', '1871', '1856'],
        correctAnswer: '1889',
      },

      {
        question: 'En quelle année a eu lieu la Révolution française ?',
        options: ['1789', '1799', '1776', '1815'],
        correctAnswer: '1789',
      },
      {
        question: 'Qui était le roi de France pendant la Révolution ?',
        options: ['Louis XVI', 'Louis XIV', 'Napoléon Bonaparte', 'Charlemagne'],
        correctAnswer: 'Louis XVI',
      },
      {
        question: 'Quel événement a marqué la fin de la Première Guerre mondiale ?',
        options: ['L\'armistice de 1918', 'La signature du Traité de Versailles', 'La bataille de Verdun', 'Le débarquement de Normandie'],
        correctAnswer: 'L\'armistice de 1918',
      },
      {
        question: 'Qui était le premier président des États-Unis ?',
        options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Theodore Roosevelt'],
        correctAnswer: 'George Washington',
      },
      {
        question: 'Quel empire a construit la Grande Muraille de Chine ?',
        options: ['L\'Empire Qin', 'L\'Empire Mongol', 'L\'Empire Tang', 'L\'Empire Han'],
        correctAnswer: 'L\'Empire Qin',
      },
      {
        question: 'Qui était le général pendant la bataille de Waterloo ?',
        options: ['Napoléon Bonaparte', 'Wellington', 'Joffre', 'Patton'],
        correctAnswer: 'Napoléon Bonaparte',
      },
      {
        question: 'En quelle année a eu lieu la chute du mur de Berlin ?',
        options: ['1989', '1991', '1975', '1969'],
        correctAnswer: '1989',
      },
      {
        question: 'Qui a écrit "Le Prince" ?',
        options: ['Machiavel', 'Jean-Jacques Rousseau', 'Voltaire', 'Descartes'],
        correctAnswer: 'Machiavel',
      },

    ],
  };

  getRandomQuestion(theme: string): any {
    const themeQuestions = this.questions[theme];
    if (themeQuestions && themeQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * themeQuestions.length);
      return themeQuestions[randomIndex];
    }
    return { question: 'Aucune question disponible pour ce thème.', options: [], correctAnswer: '' };
  }
}
