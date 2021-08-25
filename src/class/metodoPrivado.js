class secondPerson {
    #nickname;
    #age
    constructor({nickname, age}) {
        this.#nickname = nickname;
        this.#age = age
    }

    speak() {
        return console.log(`Seu nome é ${this.#nickname} e você tem ${this.#age} anos.`)
    }

    set nickname(string) {
        this.#nickname = string
    }

    get nickname() {
        return this.#nickname
    }

    set age(number) {
        this.#age = number
    }

    get age() {
        return this.#age
    }
}

class Employee extends secondPerson {
    #codelanguage
    constructor({nickname, age, codelanguage}){
        super({nickname, age})
        this.#codelanguage = codelanguage
    }

    stack(){
        return console.log(`Seu nome é ${this.nickname}, você tem ${this.age} anos e programa em ${this.#codelanguage}`)
    }
}

module.exports = Employee