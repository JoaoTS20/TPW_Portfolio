import{Mammal} from "./Mammal";

export class Feline extends Mammal{
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