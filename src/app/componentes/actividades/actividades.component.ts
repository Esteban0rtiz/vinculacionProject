import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  actividades: any[] = []; // Asegúrate de que la propiedad 'actividades' esté definida e inicializada correctamente
}