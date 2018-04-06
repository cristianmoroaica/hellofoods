import { Component } from '@angular/core';

@Component({
    selector: 'meat',
    template: `
    <h2>Meats</h2>
    <ul>
    <li class="carne" *ngFor="let meat of carne">
    {{meat.denumire}}
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

  export class Meats  {
      carne: Array<any> = [
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
