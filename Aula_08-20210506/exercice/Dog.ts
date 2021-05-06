import{Canine} from "./Canine";

export class Dog extends Canine{
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