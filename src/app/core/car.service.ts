import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.model';

const STORAGE_KEY = 'registered_cars';

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
      this._vehicles.set([...data, ...this.getStored()]);
      this.loaded.set(true);
    });
  }

  add(car: Omit<Car, 'id'>): void {
    const newCar: Car = { ...car, id: Date.now() };
    const stored = [...this.getStored(), newCar];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    if (this.loaded()) {
      this._vehicles.update(list => [...list, newCar]);
    }
  }

  private getStored(): Car[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }
}
