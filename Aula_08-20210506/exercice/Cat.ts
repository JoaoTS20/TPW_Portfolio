import {Feline} from "./Feline";

export class Cat extends Feline{
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