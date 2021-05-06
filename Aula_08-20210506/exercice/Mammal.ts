import { Animal } from "./Animal";

export class Mammal extends Animal{
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
