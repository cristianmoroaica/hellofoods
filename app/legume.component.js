"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Veggies = (function () {
    function Veggies() {
        this.legume = [
            this.tuberculi = [
                {
                    denumire: "Potato",
                    culoare: ["White", "Yellow", "Orange"],
                    folosinta: [0, 1, 4]
                },
                {
                    denumire: "Kohlrabi",
                    culoare: "White",
                    folosinta: [1, 4]
                },
                {
                    denumire: "Leek",
                    culoare: "Green",
                    folosinta: [1, 2, 3, 4]
                }
            ],
            this.radacinoase = [
                {
                    denumire: "Carrot",
                    culoare: ["Orange", "Yellow"],
                    folosinta: [1, 2, 3, 4, 5]
                },
                {
                    denumire: "Parsnip",
                    culoare: "White",
                    folosinta: [1, 2, 3, 4, 5]
                },
                {
                    denumire: "Parsley",
                    culoare: "Green",
                    folosinta: [1, 2, 3, 4, 5]
                },
                {
                    denumire: "Onion",
                    culoare: "Yellow",
                    folosinta: [1, 2, 3, 4, 5, 6, 7]
                }
            ],
            this.pods = [
                {
                    denumire: "Beans",
                    culoare: ["Red", "White"],
                    folosinta: [2, 3, 4]
                },
                {
                    denumire: "Lentils",
                    culoare: ["White", "Red"],
                    folosinta: [1, 2, 3, 4]
                },
                {
                    denumire: "Peas",
                    culoare: "Green",
                    folosinta: [1, 4, 5]
                }
            ],
            this.flower = [
                {
                    denumire: "Cauliflower",
                    culoare: ["Green", "White"],
                    folosinta: [1, 3, 4, 5]
                },
                {
                    denumire: "Artichoke",
                    culoare: ["White", "Red"],
                    folosinta: [1, 3, 4, 5]
                },
                {
                    denumire: "Broccoli",
                    culoare: "Green",
                    folosinta: [1, 3, 4, 5]
                }
            ]
        ];
    }
    return Veggies;
}());
Veggies = __decorate([
    core_1.Component({
        selector: 'veggies',
        template: "\n    <h2>Veggetables</h2>\n    <ul>\n    <h3>Tubers</h3>\n    <li class=\"leguma\" *ngFor=\"let leguma of tuberculi\">\n    {{leguma.denumire}}\n    </li>\n    <h3>Roots</h3>\n    <li class=\"leguma\" *ngFor=\"let leguma of radacinoase\">\n    {{leguma.denumire}}\n    </li>\n    <h3>Pods</h3>\n    <li class=\"leguma\" *ngFor=\"let leguma of pods\">\n    {{leguma.denumire}}\n    </li>\n    <h3>Flowers</h3>\n    <li class=\"leguma\" *ngFor=\"let leguma of flower\">\n    {{leguma.denumire}}\n    </li>\n    </ul>",
    })
], Veggies);
exports.Veggies = Veggies;
//# sourceMappingURL=legume.component.js.map