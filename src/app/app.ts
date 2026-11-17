import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <app-header />
    <main id="contenido" class="main" tabindex="-1"><router-outlet /></main>
    <app-footer />
  `,
})
export class App {}
