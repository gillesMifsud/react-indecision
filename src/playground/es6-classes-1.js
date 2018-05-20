
class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `Hi, my name is ${this.name} and I'm ${this.age} `;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their major is ${this.major}`
        }

        return description;
    }
}

let me = new Student('Yin', 36, 'Developpeur Web');
console.log(me.getDescription());