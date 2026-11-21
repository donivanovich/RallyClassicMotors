import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  private http = inject(HttpClient);
  private readonly _vehicles = signal<Car[]>([]);
  readonly vehicles = this._vehicles.asReadonly();
  readonly featured = computed(() => this._vehicles().filter(v => v.featured));
  readonly loaded = signal(false);

  load(): void {
    if (this.loaded()) return;
    this.http.get<Car[]>('mocks/cars.json').subscribe(data => {
      this._vehicles.set(data);
      this.loaded.set(true);
    });
  }
}
