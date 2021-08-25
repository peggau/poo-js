class Person {
    constructor(nickname, occupation, age) {
        this._nickname = nickname;        // O _ faz referência à um objeto interno. É um padrão de nomenclatura
        this._occupation = occupation;
        this._age = age
    }

    hello(nickname, occupation, age) {
        if (occupation === "developer") {
            return `Fala ${occupation}! Seu nome é ${nickname} e você tem ${age} anos.`
        } else {
            return `Olá! Seu nome é ${nickname}, você tem ${age} anos e sua profissão é ${occupation}.`
        }
    }
}

const Pessoa = new Person;
module.exports = Pessoa