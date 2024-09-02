class Animal {
    constructor() {
        this.no_legs = 4;
    }

    printLegs() {
        console.log(this.no_legs);
    }
}

class Dog extends Animal {
    constructor() {
        super(); // Call the parent class's constructor
        this.breed = 'Husky'; // Initialize the breed property
    }

    printBreed() {
        console.log(this.breed);
    }
}

const myDog = new Dog();
myDog.printLegs(); // Outputs: 4
myDog.printBreed(); // Outputs: Husky
