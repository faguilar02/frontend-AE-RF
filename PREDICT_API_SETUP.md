# 🎯 Configuración API de Predicción de Anomalías

## ✅ Archivos Creados

### 1. **Models** (`src/app/admin-dashboard/models/predict.models.ts`)
- `CanalUso`: tipo union para canales de uso
- `Dispositivo`: tipo union para tipos de dispositivo
- `PredictRequest`: interfaz para request individual
- `PredictBatchRequest`: interfaz para batch requests
- `PredictResponse`: interfaz para respuesta del modelo
- `PredictBatchResponse`: interfaz para batch responses

### 2. **Service** (`src/app/admin-dashboard/services/predict.service.ts`)
- `predictOne(body: PredictRequest)`: POST a `/predict`
- `predictBatch(body: PredictBatchRequest)`: POST a `/predict/batch`
- API Base URL: `http://localhost:8000`

### 3. **Demo Component** (`src/app/admin-dashboard/pages/demo/`)
- Componente standalone con ejemplo funcional
- UI con DaisyUI para mostrar resultados
- Manejo de estados: loading, error, success

## 🚀 Cómo Usar

### 1. Asegúrate que tu API esté corriendo:
```bash
# Tu API debe estar en http://localhost:8000
```

### 2. Navega al componente demo:
```
http://localhost:4200/admin/demo
```

### 3. Rutas Disponibles:
- `/admin/home` → Home Page
- `/admin/demo` → Demo de Predicción

## 📋 Ejemplo de Request

```typescript
{
  id_transaccion: 123456,
  fecha: '2025-10-07T10:30:00',
  monto_operacion: 150.50,
  canal_uso: 'online',
  dispositivo: 'mobile',
  ubigeo_distrito: 150101,
  ubigeo_provincia: 1501,
  bill_lat: -12.0464,
  bill_lon: -77.0428,
  merch_lat: -12.0500,
  merch_long: -77.0450,
  ship_lat: -12.0480,
  ship_long: -77.0430,
  dist1: 0.5,
  dist2: 0.3
}
```

## 🔧 Cambios en Configuración

### `app.config.ts`
- ✅ Agregado `provideHttpClient()` para habilitar HttpClient

### Componentes
- ✅ Todos los componentes marcados como `standalone: true`

## 🎨 UI Features

El componente demo incluye:
- Botón para ejecutar predicción
- Loading state con spinner
- Manejo de errores con alerts
- Visualización de respuesta en JSON
- Cards con métricas clave:
  - ID Transacción
  - Etiqueta Predicha (Normal/Anómalo)
  - Anomaly Score
  - Modelo y versión

## 🛠️ Solución de Problemas de Rutas

### Problema Original
Las rutas no funcionaban porque:
1. ❌ Componentes sin `standalone: true`
2. ❌ HttpClient no configurado en `app.config.ts`

### Solución Aplicada
1. ✅ Agregado `standalone: true` a todos los componentes
2. ✅ Agregado `provideHttpClient()` en `app.config.ts`
3. ✅ Rutas configuradas correctamente con lazy loading

## 📝 Notas Importantes

- **No hay lógica de preprocesamiento**: El servicio solo hace POST y retorna observables
- **Backend en dry-run**: Debe responder 200 con el payload correcto
- **Sin validaciones extra**: La validación debe hacerse en el backend
- **CORS**: Asegúrate que tu API en `localhost:8000` permita CORS desde `localhost:4200`

## 🧪 Testing

Para probar la integración:

1. Levanta tu API backend en `http://localhost:8000`
2. Abre `http://localhost:4200/admin/demo`
3. Haz clic en "Ejecutar Predicción"
4. Verifica la respuesta en la UI

## 📦 Endpoints Esperados en Backend

```
POST http://localhost:8000/predict
Content-Type: application/json
Body: PredictRequest

POST http://localhost:8000/predict/batch
Content-Type: application/json
Body: PredictBatchRequest
```
