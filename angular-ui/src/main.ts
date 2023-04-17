import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './scss/main.scss';


import 'font-awesome/scss/font-awesome.scss';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
