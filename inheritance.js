class Person {
    talk() {
        return 'Talking'
    }
}

const me = new Person();
console.log(me.talk())

class Superman extends Person {
    fly() {
        return 'Flying to the moon...'
    }
}

const you = new Superman;

console.log(you.fly())
console.log(you.talk())

const superPower = {
    fly() {
        return 'Flying'
    }
}

console.log(me)

const him = {}

Object.setPrototypeOf(him, superPower)
console.log(him)
console.log(him.fly())