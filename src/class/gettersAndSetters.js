class Person {
    constructor(nickname, occupation) {
        this._nickname = nickname;
        this._occupation = occupation
    }

    speak() {
        return `${this._nickname} trabalha com ${this._occupation}.`
    }

    set nickname(string) {
        this._nickname = string.toUpperCase() // Pega o valor da string e retorna em maiúsculo
    }

    get nickname() {
        return this._nickname
    }
}

let mariane = new Person('Mariane', 'Desenvolvedora')
mariane.nickname = 'MarIanE'

module.exports = mariane