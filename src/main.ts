import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import localeIt from '@angular/common/locales/it'

import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));

  registerLocaleData(localeIt);
