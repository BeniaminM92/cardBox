import { Answer } from './Answer.js';
import { Card } from './Card.js';
import { CardBox } from './CardBox.js';

const answer1 = new Answer(1, "Frau Merkel", 1, false);
const answer2 = new Answer(2, "Herr Spahn", 1, false);
const answer3 = new Answer(3, "Herr Müller", 1, false);
const answer4 = new Answer(4, "Herr Scholz", 1, true);

const card1 = new Card(1, "Wer ist Kanzler in Deutschland?", 1);
card1.addAnswer(answer1);
card1.addAnswer(answer2);
card1.addAnswer(answer3);
card1.addAnswer(answer4);



const answer5 = new Answer(5, "Frau Merkel", 2, false);
const answer6 = new Answer(6, "Herr Spahn", 2, false);
const answer7 = new Answer(7, "Herr Steinmeier", 2, true);
const answer8 = new Answer(8, "Herr Scholz", 2, false);

const card2 = new Card(2, "Wer ist Bundespräsident in Deutschland?", 2);
card1.addAnswer(answer5);
card1.addAnswer(answer6);
card1.addAnswer(answer7);
card1.addAnswer(answer8);



// CardBox erstellen und laden
const cardBox = new CardBox(1);
cardBox.loadCards([card1], [card2]);
