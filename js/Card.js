import { Answer } from './Answer.js';

export class Card {
    constructor(id, question, cardBoxId) {
        this._id = id;
        this._question = question;
        this._cardBoxId = cardBoxId;
        this.answers = [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get question() {
        return this._question;
    }

    set question(value) {
        this._question = value;
    }

    get cardBoxId() {
        return this._cardBoxId;
    }

    set cardBoxId(value) {
        this._cardBoxId = value;
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