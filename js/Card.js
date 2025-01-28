import { Answer } from './Answer.js';

export class Card {
    #id;
    #question;
    #cardBoxId;
    #answers;
    
    constructor(id, question, cardBoxId, answers) {
        this.#id = id;
        this.#question = question;
        this.#cardBoxId = cardBoxId;
        this.#answers = answers;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get question() {
        return this.#question;
    }

    set question(value) {
        this.#question = value;
    }

    get cardBoxId() {
        return this.#cardBoxId;
    }

    set cardBoxId(value) {
        this.#cardBoxId = value;
    }

    get answers() {
        return this.answers;
    }

    addAnswer(answer) {
        this.answers.push(answer);
    }

    getCorrectAnswers() {
        return this.answers.filter(answer => answer.correct());
    }
}