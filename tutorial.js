const human = {
    kind: 'Human'
}

const me = Object.create(human)

me.age = 24
me.gender = 'male'

const you = Object.create(me)
you.age = 20

console.log(you)