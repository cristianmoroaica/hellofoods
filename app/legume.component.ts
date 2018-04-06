import { Component } from '@angular/core';

@Component({
    selector: 'veggies',
    template: `
    <h2>Veggetables</h2>
    <ul>
    <h3>Tubers</h3>
    <li class="leguma" *ngFor="let leguma of tuberculi">
    {{leguma.denumire}}
    </li>
    <h3>Roots</h3>
    <li class="leguma" *ngFor="let leguma of radacinoase">
    {{leguma.denumire}}
    </li>
    <h3>Pods</h3>
    <li class="leguma" *ngFor="let leguma of pods">
    {{leguma.denumire}}
    </li>
    <h3>Flowers</h3>
    <li class="leguma" *ngFor="let leguma of flower">
    {{leguma.denumire}}
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

  export class Veggies  {
    tuberculi: Array<any>;
    radacinoase: Array<any>;
    pods: Array<any>;
    flower: Array<any>;
    legume: Array<any> = [
        this.tuberculi = [
            {
            denumire: "Potato",
            culoare: ["White", "Yellow", "Orange"],
            folosinta: [0, 1, 4]
            },
            {
            denumire: "Kohlrabi",
            culoare: "White",
            folosinta: [1, 4]
            },
            {
            denumire: "Leek",
            culoare: "Green",
            folosinta: [1, 2, 3, 4]
            }
        ],
        this.radacinoase = [
            {
            denumire: "Carrot",
            culoare: ["Orange", "Yellow"],
            folosinta: [1, 2, 3, 4, 5]
            },
            {
            denumire: "Parsnip",
            culoare: "White",
            folosinta: [1, 2, 3, 4, 5]
            },
            {
            denumire: "Parsley",
            culoare: "Green",
            folosinta: [1, 2, 3, 4, 5]
            },
            {
            denumire: "Onion",
            culoare: "Yellow",
            folosinta: [1, 2, 3, 4, 5, 6, 7]
            }
        ],
        this.pods = [
            {
            denumire: "Beans",
            culoare: ["Red", "White"],
            folosinta: [2, 3, 4]
            },
            {
            denumire: "Lentils",
            culoare: ["White", "Red"],
            folosinta: [1, 2, 3, 4]
            },
            {
            denumire: "Peas",
            culoare: "Green",
            folosinta: [1, 4, 5]
            }
        ],
        this.flower = [
            {
            denumire: "Cauliflower",
            culoare: ["Green", "White"],
            folosinta: [1, 3, 4, 5]
            },
            {
            denumire: "Artichoke",
            culoare: ["White", "Red"],
            folosinta: [1, 3, 4, 5]
            },
            {
            denumire: "Broccoli",
            culoare: "Green",
            folosinta: [1, 3, 4, 5]
            }
        ]
    ]
}
