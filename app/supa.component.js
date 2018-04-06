"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var randomingredients_component_1 = require("./randomingredients.component");
var ingredients = new randomingredients_component_1.Ingredients();
var soupmeats = [];
for (var i = 0; i < ingredients.meats.length; i++) {
    if (ingredients.meats[i].folosinta.includes(4)) {
        soupmeats.push(ingredients.meats[i].denumire);
    }
}
var soupveggies = [];
for (var i = 0; i < ingredients.veggies.length; i++) {
    if (ingredients.veggies[i].folosinta.includes(4)) {
        soupveggies.push(ingredients.veggies[i].denumire);
    }
}
var soupoils = [];
for (var i = 0; i < ingredients.oils.length; i++) {
    if (ingredients.oils[i].folosinta.includes(4)) {
        soupoils.push(ingredients.oils[i].denumire);
    }
}
var soupherbs = [];
for (var i = 0; i < ingredients.herbs.length; i++) {
    if (ingredients.herbs[i].folosinta.includes(4)) {
        soupherbs.push(ingredients.herbs[i].denumire);
    }
}
var soupfills = [];
for (var i = 0; i < ingredients.fills.length; i++) {
    if (ingredients.fills[i].folosinta.includes(4)) {
        soupfills.push(ingredients.fills[i].denumire);
    }
}
var soupspices = [];
for (var i = 0; i < ingredients.spices.length; i++) {
    if (ingredients.spices[i].folosinta.includes(4)) {
        soupspices.push(ingredients.spices[i].denumire);
    }
}
if (soupmeats[0] == "Fish") {
    soupfills.length = 0;
    soupfills.push("Rice");
}
var Soup = (function () {
    function Soup() {
        this.soupmeat = soupmeats[0];
        this.soupveggie = soupveggies;
        this.soupoil = soupoils[0];
        this.soupherb = soupherbs;
        this.soupfill = soupfills[0];
        this.soupspice = soupspices;
    }
    return Soup;
}());
Soup = __decorate([
    core_1.Component({
        selector: 'soup',
        template: "\n    <h2>{{soupmeat}} soup with {{soupveggie[0]}}, {{soupveggie[1]}} and {{soupfill}}</h2>\n    <p>Bake the {{soupveggie[0]}}, {{soupveggie[1]}} and the {{soupmeat}} sprinkeled with {{soupoil}} in a tray. Move everything to a pot and cover it all with water. Add {{soupherb[0]}}, {{soupspice[0]}} and simmer for at least 1h. Dump the {{soupfill}} and cook accordingly.</p>\n    ",
    })
], Soup);
exports.Soup = Soup;
//# sourceMappingURL=supa.component.js.map