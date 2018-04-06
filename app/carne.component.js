"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Meats = (function () {
    function Meats() {
        this.carne = [
            {
                denumire: "Pork",
                culoare: ["Red", "Yellow"],
                folosinta: [2, 3, 4, 5]
            },
            {
                denumire: "Beef",
                culoare: "Red",
                folosinta: [2, 3, 4, 5]
            },
            {
                denumire: "Fish",
                culoare: "White",
                folosinta: [2, 3, 4, 5]
            },
            {
                denumire: "Chicken",
                culoare: "White",
                folosinta: [2, 3, 4, 5]
            },
            {
                denumire: "Venison",
                culoare: "Negru",
                folosinta: [2, 3, 4, 5]
            },
            {
                denumire: "Duck",
                culoare: "Red",
                folosinta: [2, 3, 4, 5]
            }
        ];
    }
    return Meats;
}());
Meats = __decorate([
    core_1.Component({
        selector: 'meat',
        template: "\n    <h2>Meats</h2>\n    <ul>\n    <li class=\"carne\" *ngFor=\"let meat of carne\">\n    {{meat.denumire}}\n    </li>\n    </ul>",
    })
], Meats);
exports.Meats = Meats;
//# sourceMappingURL=carne.component.js.map