"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Oils = (function () {
    function Oils() {
        this.oils = [
            {
                denumire: "Olive Oil",
                culoare: ["Orange", "Transparent"],
                folosinta: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                denumire: "Sesame Oil",
                culoare: "Transparent",
                folosinta: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                denumire: "Sunflower Oil",
                culoare: ["Yellow", "Transparent"],
                folosinta: [0, 1, 2, 3, 4, 5, 6]
            }
        ];
    }
    return Oils;
}());
Oils = __decorate([
    core_1.Component({
        selector: 'oils',
        template: "\n    <h2>Oils</h2>\n    <ul>\n    <li class=\"uleiuri\" *ngFor=\"let oil of oils\">\n    {{oil.denumire}}\n    </li>\n    </ul>",
    })
], Oils);
exports.Oils = Oils;
//# sourceMappingURL=uleiuri.component.js.map