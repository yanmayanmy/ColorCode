// const me = {
//     talk() {
//         return 'Talking';
//     }
// }

// const you = {
//     talk() {
//         return 'Talking';
//     }
// }

// console.log(me.talk());
// console.log(you.talk());

// class Person {
//     age = null;

//     talk() {
//         return 'Talking'
//     }
// }

// class Bot {
//     age = null

//     talk() {
//         return 'hello'
//     }
// }

// const me = new Person();
// const you = new Person();
// console.log(me.talk());
// console.log(you.talk());

// me.age = 24;

// const him = new Bot();
// him.name = 'Love Machine'


// console.log(him.talk());

// Bot.prototype.talk = function() {
//     return 'world'
// }

// console.log(him.talk());

var User = function(name, age) {
    this.name = name;
    this.age = age;
    

    //メソッドを定義する
    this.getName = function() {
        return this.name;
    }
}

const a = new User('yuta', 24);
console.log(a.getName())

User.getName = function() {
    return this.age
}

const b = new User('nana', 20);
console.log(b.getName())







var SuperUser = function(name, age) {
    this.name = name;
    this.age = age;
}

SuperUser.prototype.getName = function() {
    return this.name
}

const c = new SuperUser('noriko', 53)
console.log(c)

class User2 {
    getName() {
        return 'getting name...'
    }
}

console.log(User2.prototype)

// function Person (){}

// Person.prototype.talk = function () {
//     return 'talking'
// }

// const yuta = new Person
// console.log(yuta)

class Person {
    talk() {
        return 'talking'
    }
}

const me = new Person
console.log(me.talk())

Person.prototype.talk = function() {
    return 'hello'
}

console.log(me.talk())



function Person2() {
    this.talk = function() {
        return 'talking'
    }
}

const you = new Person2

console.log(you.talk())

console.log(Person2.talk)
console.log(Person2)
console.log(Person)
console.log(me)
console.log(you)

