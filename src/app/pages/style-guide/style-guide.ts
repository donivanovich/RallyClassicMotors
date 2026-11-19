import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-style-guide',
  imports: [],
  templateUrl: './style-guide.html',
  styleUrl: './style-guide.scss',
})
export class StyleGuide {
  readonly colors = [
    { name: 'Racing Green', token: '$color-racing-green', hex: '#1f3d2b', mod: 'green' },
    { name: 'Racing Green Dark', token: '$color-racing-green-dark', hex: '#142a1d', mod: 'green-dark' },
    { name: 'Burdeos', token: '$color-burgundy', hex: '#6d1f2a', mod: 'burgundy' },
    { name: 'Cuero', token: '$color-leather', hex: '#8b5a2b', mod: 'leather' },
    { name: 'Cuero claro', token: '$color-leather-light', hex: '#b8834f', mod: 'leather-light' },
    { name: 'Crema', token: '$color-cream', hex: '#f4ecdc', mod: 'cream' },
    { name: 'Pergamino', token: '$color-parchment', hex: '#e9dcc3', mod: 'parchment' },
    { name: 'Cromo', token: '$gradient-chrome', hex: 'gradiente', mod: 'chrome' },
    { name: 'Tinta', token: '$color-ink', hex: '#1c1a17', mod: 'ink' },
  ];
  readonly spaces = [
    { token: '$space-1', value: '0.25rem', px: 4 }, { token: '$space-2', value: '0.5rem', px: 8 },
    { token: '$space-4', value: '1rem', px: 16 }, { token: '$space-6', value: '1.5rem', px: 24 },
    { token: '$space-8', value: '2rem', px: 32 }, { token: '$space-12', value: '3rem', px: 48 },
  ];
  readonly variants = ['primary', 'secondary', 'outline', 'chrome'];
  readonly demoValue = signal('');
}
