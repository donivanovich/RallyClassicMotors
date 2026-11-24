import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CarService } from '../../core/car.service';
import { Car, CarCategory } from '../../core/car.model';

type SortKey = 'year-asc' | 'year-desc' | 'power-desc';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private service = inject(CarService);

  readonly categories: CarCategory[] = ['Pre-guerra', 'Clásico', 'Sport', 'Youngtimer'];

  readonly search = signal('');
  readonly category = signal<CarCategory | 'Todas'>('Todas');
  readonly maxYear = signal(1990);
  readonly sort = signal<SortKey>('year-asc');
  readonly selected = signal<Car | null>(null);

  readonly filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    const cat = this.category();
    const max = this.maxYear();
    const list = this.service.vehicles().filter(v =>
      (cat === 'Todas' || v.category === cat) &&
      v.year <= max &&
      (term === '' || `${v.brand} ${v.model}`.toLowerCase().includes(term))
    );
    const sorters: Record<SortKey, (a: Car, b: Car) => number> = {
      'year-asc': (a, b) => a.year - b.year,
      'year-desc': (a, b) => b.year - a.year,
      'power-desc': (a, b) => b.power - a.power,
    };
    return [...list].sort(sorters[this.sort()]);
  });

  readonly total = computed(() => this.service.vehicles().length);

  ngOnInit(): void { this.service.load(); }

  onSearch(e: Event): void { this.search.set((e.target as HTMLInputElement).value); }
  onCategory(c: CarCategory | 'Todas'): void { this.category.set(c); }
  onYear(e: Event): void { this.maxYear.set(Number((e.target as HTMLInputElement).value)); }
  onSort(e: Event): void { this.sort.set((e.target as HTMLSelectElement).value as SortKey); }
  open(v: Car): void { this.selected.set(v); }
  close(): void { this.selected.set(null); }
  reset(): void { this.search.set(''); this.category.set('Todas'); this.maxYear.set(1990); this.sort.set('year-asc'); }
}
