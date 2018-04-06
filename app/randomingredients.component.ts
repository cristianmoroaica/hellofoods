import { Component } from '@angular/core';

import { Veggies } from './legume.component';
import { Meats } from './carne.component';
import { Spices } from './condimente.component';
import { Dairy } from './lactate.component';
import { Herbs } from './herbs.component';
import { Oils } from './uleiuri.component';
import { Pastas } from './paste.component';

function shuffle(array: Array<any>) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

// Carne
let carne = new Meats();
let randommeat: Array<any> = [];
for (let i = 0; i < carne.carne.length; i++){
        randommeat.push(carne.carne[i]);
}
let meats = shuffle(randommeat);

// Spices
let spice = new Spices();
let randomspices: Array<any> = [];
for (let i = 0; i < spice.condimente.length; i++){
        randomspices.push(spice.condimente[i]);
}
let spices = shuffle(randomspices);


// Legume
let legume = new Veggies();
let randomveggies: Array<any> = [];
for (let i = 0; i < legume.legume.length; i++){
    for (let j = 0; j < legume.legume[i].length; j++) {
            randomveggies.push(legume.legume[i][j]);
    }
}
let veggies = shuffle(randomveggies);

// Uleiuri
let ulei = new Oils();
let randomoils: Array<any> = [];
for (let i = 0; i < ulei.oils.length; i++){
        randomoils.push(ulei.oils[i]);
}
let oils = shuffle(randomoils);

// Ierburi
let ierburi = new Herbs();
let randomherbs: Array<any> = [];
for (let i = 0; i < ierburi.herbs.length; i++){
        randomherbs.push(ierburi.herbs[i]);
}
let herbs = shuffle(randomherbs);

// Paste
let paste = new Pastas();
let randompastas: Array<any> = [];
for (let i = 0; i < paste.paste.length; i++){
        randompastas.push(paste.paste[i]);
}
let pastas = shuffle(randompastas);

// Dairy
let lactate = new Dairy();
let randomdairy: Array<any> = [];
for (let i = 0; i < lactate.lactate.length; i++){
        randomdairy.push(lactate.lactate[i]);
}
let dairy = shuffle(randomdairy);

@Component({
    selector: 'random-ingredients',
    template: `
    <h3>Meats: </h3>
    <p><span *ngFor="let meat of meats">{{meat.denumire}}, </span></p>
    <h3>Veggies: </h3>
    <p><span *ngFor="let veggie of veggies">{{veggie.denumire}}, </span></p>
    <h3>Oils: </h3>
    <p><span *ngFor="let oil of oils">{{oil.denumire}}, </span></p>
    <h3>Herbs: </h3>
    <p><span *ngFor="let herb of herbs">{{herb.denumire}}, </span></p>
    <h3>Fills: </h3>
    <p><span *ngFor="let fill of fills">{{fill.denumire}}, </span></p>
    <h3>Spices: </h3>
    <p><span *ngFor="let spice of spices">{{spice.denumire}}, </span></p>
    <h3>Dairies: </h3>
    <p><span *ngFor="let dair of dairy">{{dair.denumire}}, </span></p>
    <h3>Pastas: </h3>
    <p><span *ngFor="let pasta of pastas">{{pasta.denumire}}, </span></p>
    `,
  })
  export class Ingredients  {
      meats: Array<any> = meats;
      veggies: Array<any> = veggies;
      oils: Array<any> = oils;
      herbs: Array<any> = herbs;
      fills: Array<any> = pastas;
      spices: Array<any> = spices;
      dairy: Array<any> = dairy;
      pastas: Array<any> = pastas;
  }
