import { Component } from '@angular/core';

@Component({
    selector: 'herbs',
    template: `
    <h2>Herbs</h2>
    <ul>
    <li class="ierburi" *ngFor="let herb of herbs">
    {{herb.denumire}}
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

  export class Herbs  {
      herbs: Array<any> = [
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
