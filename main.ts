import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Veggies } from './app/legume.component';
import { Meats } from './app/carne.component';
import { Spices } from './app/condimente.component';
import { Dairy } from './app/lactate.component';
import { Herbs } from './app/herbs.component';
import { Oils } from './app/uleiuri.component';
import { Pastas } from './app/paste.component';

platformBrowserDynamic().bootstrapModule(AppModule);
