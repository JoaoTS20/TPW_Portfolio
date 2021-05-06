export class Animal {
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