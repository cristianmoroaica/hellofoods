"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Spices = (function () {
    function Spices() {
        this.condimente = [
            {
                denumire: "Za'atar",
                culoare: ["Gri", "Yellow"],
                folosinta: [0, 1]
            },
            {
                denumire: "Paprika",
                culoare: "Red",
                folosinta: [2, 6]
            },
            {
                denumire: "Black Pepper",
                culoare: ["White", "Negru"],
                folosinta: [0, 1, 2, 3, 4, 5, 6, 7]
            },
            {
                denumire: "Cinammon",
                culoare: "Maro",
                folosinta: [3, 4, 8]
            },
            {
                denumire: "Cumin",
                culoare: ["Maro", "Negru"],
                folosinta: [0, 1, 2, 3, 4]
            },
            {
                denumire: "Curcuma",
                culoare: "Yellow",
                folosinta: [1, 2, 3, 4]
            },
            {
                denumire: "Coriander Seeds",
                culoare: "Yellow",
                folosinta: [6, 7]
            },
            {
                denumire: "Brown Sugar",
                culoare: "Maro",
                folosinta: [0, 6, 8]
            },
            {
                denumire: "Fennel Seeds",
                culoare: "Yellow",
                folosinta: [1, 2, 3, 4, 5]
            }
        ];
    }
    return Spices;
}());
Spices = __decorate([
    core_1.Component({
        selector: 'spices',
        template: "\n    <h2>Spices</h2>\n    <ul>\n    <li class=\"condimente\" *ngFor=\"let spice of condimente\">\n    {{spice.denumire}}\n    </li>\n    </ul>",
    })
], Spices);
exports.Spices = Spices;
//# sourceMappingURL=condimente.component.js.map