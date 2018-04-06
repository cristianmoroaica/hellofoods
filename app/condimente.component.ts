import { Component } from '@angular/core';

@Component({
    selector: 'spices',
    template: `
    <h2>Spices</h2>
    <ul>
    <li class="condimente" *ngFor="let spice of condimente">
    {{spice.denumire}}
    </li>
    </ul>`,
  })

  // Legenda folosinta:
  // 0 - Panificatie
  // 1 - Piure
  // 2 - Tocanita
  // 3 - Tigaie
  // 4 - Supa
  // 5 - Paste
  // 6 - Marinada
  // 7 - Pickles
  // 8 - Desert
  // 9 - Bold

  export class Spices  {
      condimente: Array<any> = [
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
