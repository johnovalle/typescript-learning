interface IAnimal {
    readonly numberOfLegs: number;
    makeSound(): void;
    eatFood(food: string): void;

}

let testAnimal = (animal: IAnimal): void  => {
    console.log("Legs: ", animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood('milk');
    animal.eatFood('meat');
}

abstract class Animal implements IAnimal {
    constructor(public numberOfLegs: number) {

    }
    abstract makeSound(): void
    
    eatFood(food: string): void {
        console.log(`Ate ${food}`);
    }
}
//cannot instantiate and abstract class
//new Animal()

class Dog extends Animal {
    constructor(){
        super(4);
    }

    makeSound(): void {
        console.log('Woof');
    }

    eatFood(food: string): void {
        if(food !== 'meat'){
            console.log('YUK!');
            return;
        }
        super.eatFood(food);
    }
}

testAnimal(new Dog());