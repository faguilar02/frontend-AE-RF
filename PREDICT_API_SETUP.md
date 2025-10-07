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
- **API Base URL configurada por ambiente:**
  - Desarrollo: `http://localhost:8000/api`
  - Producción: `https://backend-ae-rf.onrender.com/api`

### 3. **Environments** (`src/environments/`)
- `environment.ts` - Configuración de desarrollo (localhost)
- `environment.prod.ts` - Configuración de producción (Render)

### 4. **Demo Component** (`src/app/admin-dashboard/pages/demo/`)
- Componente standalone con ejemplo funcional
- UI con DaisyUI para mostrar resultados
- Manejo de estados: loading, error, success

## 🚀 Cómo Usar

### 1. Desarrollo Local (con backend local):
```bash
# Asegúrate que tu API esté corriendo en http://localhost:8000
ng serve
```

### 2. Desarrollo con Backend en Producción:
Si quieres probar con el backend de producción en desarrollo, puedes temporalmente cambiar la URL en `src/environments/environment.ts`

### 3. Build para Producción:
```bash
# Esto usará automáticamente environment.prod.ts
ng build --configuration production

# O simplemente:
ng build
```

### 4. Navega al componente demo:
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

### `angular.json`
- ✅ Configurado `fileReplacements` para cambiar environments en build de producción

### Environments
- ✅ `environment.ts` → Desarrollo (localhost:8000)
- ✅ `environment.prod.ts` → Producción (Render)

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
- **CORS**: 
  - Desarrollo: Tu API local debe permitir CORS desde `localhost:4200`
  - Producción: Tu API en Render debe permitir CORS desde tu dominio de producción
- **Environments**: 
  - `ng serve` usa automáticamente `environment.ts` (localhost)
  - `ng build` usa automáticamente `environment.prod.ts` (Render)

## 🧪 Testing

### Desarrollo Local:
1. Levanta tu API backend en `http://localhost:8000`
2. Ejecuta `ng serve`
3. Abre `http://localhost:4200/admin/demo`
4. Haz clic en "Ejecutar Predicción"
5. Verifica la respuesta en la UI

### Producción:
1. Asegúrate que `https://backend-ae-rf.onrender.com/api` esté funcionando
2. Build: `ng build`
3. Deploy del contenido de `dist/ae-rf-frontend/browser/`
4. Prueba en tu dominio de producción

## 📦 Endpoints

### Desarrollo (localhost):
```
POST http://localhost:8000/api/predict
POST http://localhost:8000/api/predict/batch
```

### Producción (Render):
```
POST https://backend-ae-rf.onrender.com/api/predict
POST https://backend-ae-rf.onrender.com/api/predict/batch
```
