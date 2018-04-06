"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Pastas = (function () {
    function Pastas() {
        this.paste = [
            {
                denumire: "Noodles",
                culoare: "White",
                folosinta: [3, 4, 5]
            },
            {
                denumire: "Potato Dumplings",
                culoare: "White",
                folosinta: [4, 8]
            },
            {
                denumire: "Dumplings",
                culoare: "White",
                folosinta: [2, 4, 8]
            }
        ];
    }
    return Pastas;
}());
Pastas = __decorate([
    core_1.Component({
        selector: 'pasta',
        template: "\n    <h2>Pastas</h2>\n    <ul>\n    <li class=\"paste\" *ngFor=\"let tip of paste\">\n    {{tip.denumire}}\n    </li>\n    </ul>",
    })
], Pastas);
exports.Pastas = Pastas;
//# sourceMappingURL=paste.component.js.map