class Animal {
    static nAnimals: number=0;
    habitat: string;

    constructor(n: string){
        this.habitat = n;
        Animal.nAnimals++;
    }

    show() {
        return "Habitat: "+ this.habitat + " Number of Animals: "+ Animal.nAnimals;
    }
}

class Reptile extends Animal{

    constructor(n: string){
        super(n);
    }

}

class Mammal extends Animal{
    static nMammals: number=0;
    constructor(n: string){
        super(n);
        Mammal.nMammals++;
    }

    show() {
        return super.show() + " Number of Mammals: "+ Mammal.nMammals;
    }

    talk(){
        return "Is talking: ";
    }

}

class Canine extends Mammal{
    static nCanines: number=0;
    race: string;

    constructor(n: string, race: string){
        super(n);
        this.race=race;
        Canine.nCanines++;
    }
    show() {
        return super.show() + " Number of Canine: " + Canine.nCanines + " Race: " + this.race;
    }

}

class Dog extends Canine{
    static nDogs: number=0;
    bark: string;

    constructor(n: string, race: string, bark: string){
        super(n,race);
        this.bark=bark;
        Dog.nDogs++;
    }

    talk() {
        return super.talk() + this.bark;
    }

    show(){
       return super.show() + " Number of Dogs: " + Dog.nDogs;
    }


}


class Feline extends Mammal{
    static nFelines: number=0;
    familiy: string;

    constructor(n: string, family: string){
        super(n);
        this.familiy=family;
        Feline.nFelines++;
    }
    show() {
        return super.show() +  " Number of Feline: " + Feline.nFelines + " Family: " + this.familiy;
    }
}

class Cat extends Feline{
    static nCats: number=0;
    meow: string;
    name:string;
    constructor(n: string, family: string, meow: string, name : string){
        super(n,family);
        this.meow=meow;
        this.name=name;
        Cat.nCats++;
    }

    talk() {
        return super.talk() + this.meow;
    }
    show() {
        return super.show()  +" Number of Cats: " + Cat.nCats + " Name: " + this.name;
    }
}

console.log("Reptile:")
let reptile = new Reptile("Lago")
console.log(reptile.show());
console.log("Dog:")
let dog = new Dog('house', 'mix', 'woof woof!')
let ss = dog.talk()
console.log(ss)
let sh = dog.show()
console.log(sh)
console.log("Cat:")
let cat = new Cat('house', 'caty', 'meow meow!' , 'Gatão')
let css = cat.talk()
console.log(css)
let csh = cat.show()
console.log(csh)


