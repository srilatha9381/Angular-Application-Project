import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(appRoutes)
  ]
};