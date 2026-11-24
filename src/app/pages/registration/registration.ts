import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CarService } from '../../core/car.service';
import { CarCategory } from '../../core/car.model';

function yearRange(control: AbstractControl): ValidationErrors | null {
  const y = Number(control.value);
  if (!control.value) return null;
  return y >= 1900 && y <= 1990 ? null : { yearRange: true };
}
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {
  private fb = inject(FormBuilder);
  private carService = inject(CarService);
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{8}$/)]],
    license: ['', [Validators.required, Validators.pattern(/^\d{8}[A-Za-z]$/)]],
    brand: ['', [Validators.required, Validators.maxLength(40)]],
    model: ['', [Validators.required, Validators.maxLength(40)]],
    year: ['', [Validators.required, yearRange]],
    category: ['', Validators.required],
    power: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1)]],
    country: ['', [Validators.required, Validators.maxLength(40)]],
    image: ['', Validators.required],
    description: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  hasError(field: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[field];
    return c.invalid && (c.touched || this.submitted());
  }

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.carService.add({
      brand: v.brand,
      model: v.model,
      year: Number(v.year),
      category: v.category as CarCategory,
      power: Number(v.power),
      country: v.country,
      image: v.image,
      alt: `${v.brand} ${v.model}`,
      featured: false,
      history: v.description,
    });
  }

  reset(): void { this.form.reset(); this.submitted.set(false); }
}
