"use strict";
exports.__esModule = true;
/**
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
**/
var Reptile_1 = require("./Reptile");
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
console.log("Reptile:");
var reptile = new Reptile_1.Reptile("Lago");
console.log(reptile.show());
console.log("Dog:");
var dog = new Dog_1.Dog('house', 'mix', 'woof woof!');
var ss = dog.talk();
console.log(ss);
var sh = dog.show();
console.log(sh);
console.log("Cat:");
var cat = new Cat_1.Cat('house', 'caty', 'meow meow!', 'Gatão');
var css = cat.talk();
console.log(css);
var csh = cat.show();
console.log(csh);
