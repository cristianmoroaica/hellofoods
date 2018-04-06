import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Ingredients } from './randomingredients.component';
import { Soup } from './supa.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Ingredients, Soup ],
  bootstrap:    [ Ingredients, Soup ]
})
export class AppModule { }
