import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'catalogo', loadComponent: () => import('./pages/catalog/catalog').then(m => m.Catalog) },
  { path: 'itinerario', loadComponent: () => import('./pages/itinerary/itinerary').then(m => m.Itinerary) },
  { path: 'inscripcion', loadComponent: () => import('./pages/registration/registration').then(m => m.Registration) },
  { path: 'guia-estilo', loadComponent: () => import('./pages/style-guide/style-guide').then(m => m.StyleGuide) },
  { path: '**', redirectTo: '' },
];
