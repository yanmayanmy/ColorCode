function Dude(name) {
    this.name = name;
}

const me = new Dude('Yuta')
console.log(me)
console.log(Dude)
console.log(me.__proto__)
console.log(Dude.prototype)

Dude.prototype.talk = function() {
    return 'Talking'
}

console.log(me.talk())
console.log(me.__proto__)
console.log(me.prototype)
console.log(Dude.prototype)

