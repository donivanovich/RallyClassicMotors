import { Component, signal } from '@angular/core';

interface Activity { time: string; title: string; description: string; stage?: string; }

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [],
  templateUrl: './itinerary.html',
  styleUrl: './itinerary.scss',
})
export class Itinerary {
  readonly schedule = signal<Activity[]>([
    { time: '08:00', title: 'Recepción y verificaciones', description: 'Entrega de dorsales, ruta y verificación técnica en la Plaza Mayor.' },
    { time: '09:30', title: 'Salida oficial', description: 'Salida ordenada cada minuto y exhibición de vehículos al público.', stage: 'E1' },
    { time: '10:15', title: 'Tramo I', description: 'Madrid => Navacerrada (42 km), velocidad media de 48 km/h.', stage: 'E1' },
    { time: '12:00', title: 'Reagrupamiento', description: 'Parada técnica y café en el Puerto de Navacerrada.', stage: 'E2' },
    { time: '12:45', title: 'Tramo II', description: 'Navacerrada => Rascafría (35 km), radar en el km 18.', stage: 'E2' },
    { time: '14:30', title: 'Almuerzo de pilotos', description: 'Monasterio de El Paular.', stage: 'E3' },
    { time: '17:00', title: 'Concentración y concurso de elegancia', description: 'Exposición y votación del público.', stage: 'E3' },
    { time: '19:30', title: 'Entrega de trofeos', description: 'Ceremonia de clausura y cena de gala.' },
  ]);

  readonly stages = [
    { code: 'E1', name: 'Madrid => Navacerrada', km: 42 },
    { code: 'E2', name: 'Navacerrada => Rascafría', km: 35 },
    { code: 'E3', name: 'Rascafría => El Paular', km: 6 },
  ];
}
