import { Card } from './Card.js';

export class CardBox {
    #id;
    #cards;

    constructor(id) {
        this.#id = id;
        // this.#cards = [];
    }


    get id() {
        return this.#id;
    }

    set id(value) {
        this.id = value;
    }

    loadCards(cards) {
        this.#cards = cards;
    }

    // getCurrentCard() {
    // }

    // getNextCard() {
    //
    // }
    //
    // getPreviousCard() {
    //
    // }
}