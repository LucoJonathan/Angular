import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // détecter les changements de valeurs des variables
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: "enabled"})), // détecte les changements dans l'URL
    provideHttpClient() // permet de faire des requetes
  ]
};
