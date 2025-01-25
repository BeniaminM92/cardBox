import { Card } from './Card.js';

export class CardBox {
    constructor(id) {
        this.cards = [];
        this.id = id;
        this.currentCardIndex = 0;

    }


    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    loadCards(cards) {
        this.cards = cards;
    }

    getCurrentCard() {
        return this.cards[this.currentCardIndex];
    }

    getNextCard() {

    }

    getPreviousCard() {

    }
}