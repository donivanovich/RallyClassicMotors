import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarService } from '../../core/car.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private service = inject(CarService);
  readonly featured = this.service.featured;
  ngOnInit(): void { this.service.load(); }
}
