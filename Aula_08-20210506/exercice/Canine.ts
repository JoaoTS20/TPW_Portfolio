import{Mammal} from "./Mammal";

export class Canine extends Mammal{
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