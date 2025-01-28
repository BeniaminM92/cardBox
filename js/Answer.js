export class Answer {
    #id;
    #text;
    #correct;
    #cardId;

    /**
     *
     * @param id
     * @param text
     * @param cardId
     * @param correct
     */
    constructor(id, text, cardId, correct) {
        this.#id = id;
        this.#text = text;
        this.#cardId = cardId;
        this.#correct = correct;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get text() {
        return this.#text;
    }

    set text(value) {
        this.#text = value;
    }

    get cardId() {
        return this.#cardId;
    }

    set cardId(value) {
        this.#cardId = value;
    }

    get correct() {
        return this.#correct;
    }

    set correct(value) {
        this.#correct = value;
    }
}