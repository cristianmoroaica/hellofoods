"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Herbs = (function () {
    function Herbs() {
        this.herbs = [
            {
                denumire: "Rosemary",
                culoare: ["Green", "Yellow"],
                folosinta: [2, 3, 5]
            },
            {
                denumire: "Coriander Leaves",
                culoare: "Green",
                folosinta: [1, 3, 4, 5, 6]
            },
            {
                denumire: "Spring Onion",
                culoare: ["White", "Green"],
                folosinta: [1, 2, 3, 4, 5]
            },
            {
                denumire: "Bay Leaves",
                culoare: ["White", "Green"],
                folosinta: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                denumire: "Parsely Leaves",
                culoare: "Green",
                folosinta: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                denumire: "Sage",
                culoare: "Green",
                folosinta: [2, 3, 6]
            }
        ];
    }
    return Herbs;
}());
Herbs = __decorate([
    core_1.Component({
        selector: 'herbs',
        template: "\n    <h2>Herbs</h2>\n    <ul>\n    <li class=\"ierburi\" *ngFor=\"let herb of herbs\">\n    {{herb.denumire}}\n    </li>\n    </ul>",
    })
], Herbs);
exports.Herbs = Herbs;
//# sourceMappingURL=herbs.component.js.map