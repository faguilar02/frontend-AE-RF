import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictService } from '../../services/predict.service';
import { PredictRequest, PredictResponse } from '../../models/predict.models';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  response: PredictResponse | null = null;
  loading = false;
  error: string | null = null;

  private exampleRequest: PredictRequest = {
    id_transaccion: 123456,
    fecha: '2025-10-07T10:30:00', // ISO-8601 ok
    monto_operacion: 150.5,
    canal_uso: 'online',
    dispositivo: 'mobile',
    ubigeo_distrito: 150101,
    ubigeo_provincia: 1501,
    // comercio NO aplica en online
    merch_lat: null,
    merch_long: null,
    // envío SÍ aplica
    ship_lat: -12.048,
    ship_long: -77.043,
    // distancias: mejor que las calcule el backend
    dist1: null, // o -1
    dist2: null, // backend calculará bill ↔ ship
  };

  constructor(private predictService: PredictService) {}

  testPrediction() {
    this.loading = true;
    this.error = null;
    this.response = null;

    this.predictService.predictOne(this.exampleRequest).subscribe({
      next: (res) => {
        this.response = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Error al llamar a la API';
        this.loading = false;
        console.error('Error:', err);
      },
    });
  }
}
