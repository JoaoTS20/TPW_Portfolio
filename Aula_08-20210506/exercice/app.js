var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.habitat = n;
        Animal.nAnimals++;
    }
    Animal.prototype.show = function () {
        return "Habitat: " + this.habitat + " Number of Animals: " + Animal.nAnimals;
    };
    Animal.nAnimals = 0;
    return Animal;
}());
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(n) {
        return _super.call(this, n) || this;
    }
    return Reptile;
}(Animal));
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(n) {
        var _this = _super.call(this, n) || this;
        Mammal.nMammals++;
        return _this;
    }
    Mammal.prototype.show = function () {
        return _super.prototype.show.call(this) + " Number of Mammals: " + Mammal.nMammals;
    };
    Mammal.prototype.talk = function () {
        return "Is talking: ";
    };
    Mammal.nMammals = 0;
    return Mammal;
}(Animal));
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine(n, race) {
        var _this = _super.call(this, n) || this;
        _this.race = race;
        Canine.nCanines++;
        return _this;
    }
    Canine.prototype.show = function () {
        return _super.prototype.show.call(this) + " Number of Canine: " + Canine.nCanines + " Race: " + this.race;
    };
    Canine.nCanines = 0;
    return Canine;
}(Mammal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(n, race, bark) {
        var _this = _super.call(this, n, race) || this;
        _this.bark = bark;
        Dog.nDogs++;
        return _this;
    }
    Dog.prototype.talk = function () {
        return _super.prototype.talk.call(this) + this.bark;
    };
    Dog.prototype.show = function () {
        return _super.prototype.show.call(this) + " Number of Dogs: " + Dog.nDogs;
    };
    Dog.nDogs = 0;
    return Dog;
}(Canine));
var Feline = /** @class */ (function (_super) {
    __extends(Feline, _super);
    function Feline(n, family) {
        var _this = _super.call(this, n) || this;
        _this.familiy = family;
        Feline.nFelines++;
        return _this;
    }
    Feline.prototype.show = function () {
        return _super.prototype.show.call(this) + " Number of Feline: " + Feline.nFelines + " Family: " + this.familiy;
    };
    Feline.nFelines = 0;
    return Feline;
}(Mammal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(n, family, meow, name) {
        var _this = _super.call(this, n, family) || this;
        _this.meow = meow;
        _this.name = name;
        Cat.nCats++;
        return _this;
    }
    Cat.prototype.talk = function () {
        return _super.prototype.talk.call(this) + this.meow;
    };
    Cat.prototype.show = function () {
        return _super.prototype.show.call(this) + " Number of Cats: " + Cat.nCats + " Name: " + this.name;
    };
    Cat.nCats = 0;
    return Cat;
}(Feline));
console.log("Reptile:");
var reptile = new Reptile("Lago");
console.log(reptile.show());
console.log("Dog:");
var dog = new Dog('house', 'mix', 'woof woof!');
var ss = dog.talk();
console.log(ss);
var sh = dog.show();
console.log(sh);
console.log("Cat:");
var cat = new Cat('house', 'caty', 'meow meow!', 'Gatão');
var css = cat.talk();
console.log(css);
var csh = cat.show();
console.log(csh);
