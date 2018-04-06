import { Component } from '@angular/core';

@Component({
    selector: 'dairy',
    template: `
    <h2>Dairy</h2>
    <ul>
    <li class="lactate" *ngFor="let lactat of lactate">
    {{lactat.denumire}}
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

  export class Dairy  {
      lactate: Array<any> = [
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
