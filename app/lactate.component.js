"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Dairy = (function () {
    function Dairy() {
        this.lactate = [
            {
                denumire: "Cheese",
                culoare: ["White", "Yellow"],
                folosinta: [5, 8]
            },
            {
                denumire: "Heavy Cream",
                culoare: "White",
                folosinta: [5, 8]
            },
            {
                denumire: "Milk",
                culoare: "White",
                folosinta: [0, 1, 6, 8]
            }
        ];
    }
    return Dairy;
}());
Dairy = __decorate([
    core_1.Component({
        selector: 'dairy',
        template: "\n    <h2>Dairy</h2>\n    <ul>\n    <li class=\"lactate\" *ngFor=\"let lactat of lactate\">\n    {{lactat.denumire}}\n    </li>\n    </ul>",
    })
], Dairy);
exports.Dairy = Dairy;
//# sourceMappingURL=lactate.component.js.map