import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PredictRequest,
  PredictResponse,
  PredictBatchRequest,
  PredictBatchResponse,
} from '../models/predict.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  private readonly apiBase = environment.apiUrl;

  constructor(private http: HttpClient) {}

  predictOne(body: PredictRequest): Observable<PredictResponse> {
    return this.http.post<PredictResponse>(`${this.apiBase}/predict`, body);
  }

  predictBatch(body: PredictBatchRequest): Observable<PredictBatchResponse> {
    return this.http.post<PredictBatchResponse>(`${this.apiBase}/predict/batch`, body);
  }
}
