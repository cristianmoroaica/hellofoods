import { Component } from '@angular/core';

@Component({
    selector: 'pasta',
    template: `
    <h2>Pastas</h2>
    <ul>
    <li class="paste" *ngFor="let tip of paste">
    {{tip.denumire}}
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

  export class Pastas  {
      paste: Array<any> = [
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
