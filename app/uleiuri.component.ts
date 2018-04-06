import { Component } from '@angular/core';

@Component({
    selector: 'oils',
    template: `
    <h2>Oils</h2>
    <ul>
    <li class="uleiuri" *ngFor="let oil of oils">
    {{oil.denumire}}
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

  export class Oils  {
      oils: Array<any> = [
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
