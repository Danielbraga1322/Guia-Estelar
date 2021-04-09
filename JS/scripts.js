// 1. declare uma variavel de nome weight
let weight

// 2. que tipo de dado é a variável acima?
console.log(typeof weight)


/* 3. declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: boolean (boolean)
*/
let name = "Daniel"
let age = 32
let stars = 4.5
let isSubscribed = false

/* 4. a variavel studant abaixo é de que tipo de dados?

4.1 atribua a ela as mesmas propriedades e valores do ex 3.

4.2 mostre no console a seguinte msg:
    <name> de idade <age> pesa <weight> kg.

atenação, substitua <name>, <age> e <weight> pelos valores de cada proriedade do objeto
*/

let student = {
    name: "Daniel",
    age: 32,
    weight: 89.0,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} anos, pesa ${student.weight} kg`)

/* 5. declare uma var do tipo array, de nome studants e atribua a ela nenhum valor, ou seja, somente o array vazio */

let students = []

/* 6. reatribua valorpara a var acima, colocando dentro dela o objeto studant da questao 4. */

students = [
    student
]
console.log(students)

/* 7. coloque no console o valor da posição 0 do array acima */

console.log(students[0])

/* 8. crie um novo student e coloque na pos 1 do array students*/

const Thaissa = {
    nome: "thaissa",
    age: 33,
    weight: 75,
    isSubscribed: true
}

students = [
    student,
    Thaissa
]
console.log(students)

/* 9. sem rodar o cod diga a resposta do código abaixo e pq? apos sua resposta, rode o cod e veja se acertou.*/

console.log(a)
var a = 1

