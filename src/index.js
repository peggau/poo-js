const objJavascript = require('./literals/objeto')
const objJSON = require('./literals/objeto.json')
const Pessoa = require('./class/anatomia')
const mariane = require('./class/gettersAndSetters')
const Person = require('./class/metodoPublico')
const Employee = require('./class/metodoPrivado')


console.log(objJavascript.getFinalPrice())


console.log(objJSON.produto[1].name)


console.log(Pessoa.hello('Giovanna', 'developer', 21))


console.log(mariane.nickname)


let marco = new Person({
    nickname: 'Marco',
    age: 22
})._nickname

console.log(marco)


let maria = new Employee({
    nickname: 'Maria',
    age: 19,
    codelanguage: 'JavaScript'
})

maria.speak()

maria.stack()