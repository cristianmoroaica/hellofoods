"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var legume_component_1 = require("./legume.component");
var carne_component_1 = require("./carne.component");
var condimente_component_1 = require("./condimente.component");
var lactate_component_1 = require("./lactate.component");
var herbs_component_1 = require("./herbs.component");
var uleiuri_component_1 = require("./uleiuri.component");
var paste_component_1 = require("./paste.component");
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// Carne
var carne = new carne_component_1.Meats();
var randommeat = [];
for (var i = 0; i < carne.carne.length; i++) {
    randommeat.push(carne.carne[i]);
}
var meats = shuffle(randommeat);
// Spices
var spice = new condimente_component_1.Spices();
var randomspices = [];
for (var i = 0; i < spice.condimente.length; i++) {
    randomspices.push(spice.condimente[i]);
}
var spices = shuffle(randomspices);
// Legume
var legume = new legume_component_1.Veggies();
var randomveggies = [];
for (var i = 0; i < legume.legume.length; i++) {
    for (var j = 0; j < legume.legume[i].length; j++) {
        randomveggies.push(legume.legume[i][j]);
    }
}
var veggies = shuffle(randomveggies);
// Uleiuri
var ulei = new uleiuri_component_1.Oils();
var randomoils = [];
for (var i = 0; i < ulei.oils.length; i++) {
    randomoils.push(ulei.oils[i]);
}
var oils = shuffle(randomoils);
// Ierburi
var ierburi = new herbs_component_1.Herbs();
var randomherbs = [];
for (var i = 0; i < ierburi.herbs.length; i++) {
    randomherbs.push(ierburi.herbs[i]);
}
var herbs = shuffle(randomherbs);
// Paste
var paste = new paste_component_1.Pastas();
var randompastas = [];
for (var i = 0; i < paste.paste.length; i++) {
    randompastas.push(paste.paste[i]);
}
var pastas = shuffle(randompastas);
// Dairy
var lactate = new lactate_component_1.Dairy();
var randomdairy = [];
for (var i = 0; i < lactate.lactate.length; i++) {
    randomdairy.push(lactate.lactate[i]);
}
var dairy = shuffle(randomdairy);
var Ingredients = (function () {
    function Ingredients() {
        this.meats = meats;
        this.veggies = veggies;
        this.oils = oils;
        this.herbs = herbs;
        this.fills = pastas;
        this.spices = spices;
        this.dairy = dairy;
        this.pastas = pastas;
    }
    return Ingredients;
}());
Ingredients = __decorate([
    core_1.Component({
        selector: 'random-ingredients',
        template: "\n    <h3>Meats: </h3>\n    <p><span *ngFor=\"let meat of meats\">{{meat.denumire}}, </span></p>\n    <h3>Veggies: </h3>\n    <p><span *ngFor=\"let veggie of veggies\">{{veggie.denumire}}, </span></p>\n    <h3>Oils: </h3>\n    <p><span *ngFor=\"let oil of oils\">{{oil.denumire}}, </span></p>\n    <h3>Herbs: </h3>\n    <p><span *ngFor=\"let herb of herbs\">{{herb.denumire}}, </span></p>\n    <h3>Fills: </h3>\n    <p><span *ngFor=\"let fill of fills\">{{fill.denumire}}, </span></p>\n    <h3>Spices: </h3>\n    <p><span *ngFor=\"let spice of spices\">{{spice.denumire}}, </span></p>\n    <h3>Dairies: </h3>\n    <p><span *ngFor=\"let dair of dairy\">{{dair.denumire}}, </span></p>\n    <h3>Pastas: </h3>\n    <p><span *ngFor=\"let pasta of pastas\">{{pasta.denumire}}, </span></p>\n    ",
    })
], Ingredients);
exports.Ingredients = Ingredients;
//# sourceMappingURL=randomingredients.component.js.map