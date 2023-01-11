class Character {
    #health

    constructor (name, health) {
        this.name = name
        this.#health = health
    }

    shout = () => console.log("I'm any character, and my name is " + this.name + "!!!")
    isAlive = () => this.#health > 0 ? true : false
    damage = () => this.#health = this.#health - 1
    getHealth = () => this.#health
}

class Human extends Character {
    constructor (name, health, region) {
        super(name, health)
        this.region = region
    }

    shout = () => console.log("I'm a human, and my name is " + this.name + "!!!")
    identify = () => console.log("I belong to the region of " + this.region)
}

class Orc extends Character {
    constructor (name, health, weight) {
        super(name, health)
        this.weight = weight
    }

    shout = () => console.log("I'm an orc, and my name is " + this.name + "!!!")
}

class Undead extends Character {
    constructor (name, health, yearsDead) {
        super(name, health)
        this.yearsDead = yearsDead
    }

    shout = () => console.log("I'm an undead, and my name is " + this.name + "!!!")
    moarn = () => console.log("I've been dead for " + this.yearsDead + " years!")
}

class NightElf extends Character {
    constructor (name, health, height) {
        super(name, health)
        this.height = height
    }

    shout = () => console.log("I'm a night elf, and my name is " + this.name + "!!!")
}

const aCharacter = new Character("Belisario", 10)
aCharacter.shout()
console.log(aCharacter.getHealth())
aCharacter.damage()
console.log(aCharacter.getHealth())
console.log(aCharacter.isAlive())

/*const aHuman = new Human("Alexander", 15, "Africa")
aHuman.shout()
console.log(aHuman.getHealth())
aHuman.damage()
console.log(aHuman.getHealth())
console.log(aHuman.isAlive())
aHuman.identify()

const anOrc = new Orc("Mobrukk", 20, 200)
anOrc.shout()
console.log(anOrc.getHealth())
anOrc.damage()
console.log(anOrc.getHealth())
console.log(anOrc.isAlive())
console.log(anOrc.weight)

const anUndead = new Undead("Myconid", 1, 1000)
anUndead.shout()
console.log(anUndead.getHealth())
anUndead.damage()
console.log(anUndead.getHealth())
console.log(anUndead.isAlive())
anUndead.moarn()

const anElf = new NightElf("Alwin", 20, 210)
anElf.shout()
console.log(anElf.getHealth())
anElf.damage()
console.log(anElf.getHealth())
console.log(anElf.isAlive())
console.log(anElf.height)*/