export class Answer {
    /**
     *
     * @param id
     * @param text
     * @param cardId
     * @param correct
     */
    constructor(id, text, cardId, correct) {
        this._id = id;
        this._text = text;
        this._cardId = cardId;
        this._correct = correct;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get cardId() {
        return this._cardId;
    }

    set cardId(value) {
        this._cardId = value;
    }

    get correct() {
        return this._correct;
    }

    set correct(value) {
        this._correct = value;
    }
}