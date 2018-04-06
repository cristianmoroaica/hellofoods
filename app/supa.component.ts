import { Component } from '@angular/core';

import { Ingredients } from './randomingredients.component';

let ingredients = new Ingredients();
const soupmeats: Array<any> = [];
for (let i = 0; i < ingredients.meats.length; i++) {
    if (ingredients.meats[i].folosinta.includes(4)){
        soupmeats.push(ingredients.meats[i].denumire);
    }
}

const soupveggies: Array<any> = [];
for (let i = 0; i < ingredients.veggies.length; i++) {
    if (ingredients.veggies[i].folosinta.includes(4)){
        soupveggies.push(ingredients.veggies[i].denumire);
    }
}

const soupoils: Array<any> = [];
for (let i = 0; i < ingredients.oils.length; i++) {
    if (ingredients.oils[i].folosinta.includes(4)){
        soupoils.push(ingredients.oils[i].denumire);
    }
}

const soupherbs: Array<any> = [];
for (let i = 0; i < ingredients.herbs.length; i++) {
    if (ingredients.herbs[i].folosinta.includes(4)){
        soupherbs.push(ingredients.herbs[i].denumire);
    }
}

let soupfills: Array<any> = [];
for (let i = 0; i < ingredients.fills.length; i++) {
    if (ingredients.fills[i].folosinta.includes(4)){
        soupfills.push(ingredients.fills[i].denumire);
    }
}

const soupspices: Array<any> = [];
for (let i = 0; i < ingredients.spices.length; i++) {
    if (ingredients.spices[i].folosinta.includes(4)){
        soupspices.push(ingredients.spices[i].denumire);
    }
}

if (soupmeats[0] == "Fish"){
    soupfills.length = 0;
    soupfills.push("Rice");
}

@Component({
    selector: 'soup',
    template: `
    <h2>{{soupmeat}} soup with {{soupveggie[0]}}, {{soupveggie[1]}} and {{soupfill}}</h2>
    <p>Bake the {{soupveggie[0]}}, {{soupveggie[1]}} and the {{soupmeat}} sprinkeled with {{soupoil}} in a tray. Move everything to a pot and cover it all with water. Add {{soupherb[0]}}, {{soupspice[0]}} and simmer for at least 1h. Dump the {{soupfill}} and cook accordingly.</p>
    `,
  })
  export class Soup  {
      soupmeat: Array<any> = soupmeats[0];
      soupveggie: Array<any> = soupveggies;
      soupoil: Array<any> = soupoils[0];
      soupherb: Array<any> = soupherbs;
      soupfill: Array<any> = soupfills[0];
      soupspice: Array<any> = soupspices;
  }
