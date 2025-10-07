export type CanalUso = 'online' | 'pos' | 'atm' | 'transf';
export type Dispositivo = 'mobile' | 'desktop' | 'unknown';

export interface PredictRequest {
  id_transaccion: number | string;
  fecha: string;
  monto_operacion: number;
  canal_uso: CanalUso;
  dispositivo: Dispositivo;
  ubigeo_distrito?: number | null;
  ubigeo_provincia?: number | null;
  bill_lat?: number | null;
  bill_lon?: number | null;
  merch_lat?: number | null;
  merch_long?: number | null;
  ship_lat?: number | null;
  ship_long?: number | null;
  dist1?: number | null;
  dist2?: number | null;
}

export interface PredictBatchRequest {
  items: PredictRequest[];
}

export interface PredictResponse {
  id_transaccion: number | string;
  anomaly_score: number;
  threshold: number;
  label_pred: 0 | 1;
  channel_used: CanalUso;
  model: { name: string; version: string };
  distances?: { dist1: number; dist2: number };
  feature_flags?: { dist1_missing: 0 | 1; dist2_missing: 0 | 1; dt_unknown: 0 | 1 };
  explanations?: Array<{ name: string; value: number; contribution?: number }>;
  timing_ms?: number;
  warnings?: string[];
  errors?: string[];
}

export interface PredictBatchResponse {
  items: PredictResponse[];
}
