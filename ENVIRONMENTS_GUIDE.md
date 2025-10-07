# 🌍 Sistema de Environments - API URLs

## ✅ Configuración Completa

### 📁 Archivos Creados:

1. **`src/environments/environment.ts`** (Desarrollo)
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000/api',
   };
   ```

2. **`src/environments/environment.prod.ts`** (Producción)
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://backend-ae-rf.onrender.com/api',
   };
   ```

3. **`angular.json`** - Configurado con `fileReplacements`

4. **`predict.service.ts`** - Usa `environment.apiUrl`

---

## 🚀 Uso Automático

### Desarrollo (ng serve):
```bash
ng serve
```
✅ Usa automáticamente: `http://localhost:8000/api`

### Build Producción:
```bash
ng build
# o
ng build --configuration production
```
✅ Usa automáticamente: `https://backend-ae-rf.onrender.com/api`

---

## 🔧 Cómo Funciona

Angular reemplaza automáticamente el archivo:
- **Desarrollo**: `environment.ts` se mantiene
- **Producción**: `environment.ts` es reemplazado por `environment.prod.ts`

El servicio siempre importa:
```typescript
import { environment } from '../../../environments/environment';
```

Pero Angular cambia cuál archivo se usa dependiendo del build.

---

## 🛠️ Agregar Más Variables de Environment

Puedes agregar más configuraciones:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api',
  enableDebug: true,
  maxRetries: 3,
  timeout: 30000,
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://backend-ae-rf.onrender.com/api',
  enableDebug: false,
  maxRetries: 5,
  timeout: 60000,
};
```

Y usarlas en cualquier servicio:
```typescript
import { environment } from '../../environments/environment';

if (environment.enableDebug) {
  console.log('Debug mode enabled');
}
```

---

## 🎯 Testing de Environments

### Probar con Backend de Producción en Desarrollo:

**Opción 1**: Modificar temporalmente `environment.ts`
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://backend-ae-rf.onrender.com/api', // Cambiar aquí
};
```

**Opción 2**: Crear un nuevo environment (staging)
1. Crear `environment.staging.ts`
2. Agregar configuración en `angular.json`
3. Ejecutar: `ng serve --configuration=staging`

---

## ✅ Verificación

Para ver qué environment estás usando, puedes agregar un console.log temporal:

```typescript
// En el constructor del servicio
constructor(private http: HttpClient) {
  console.log('🌍 API Base URL:', environment.apiUrl);
  console.log('🏗️ Production Mode:', environment.production);
}
```

---

## 📝 Importante

- ✅ **NO** hacer commit de cambios temporales en environments
- ✅ Las URLs son públicas, no poner secrets aquí
- ✅ Para secrets usar variables de entorno del servidor
- ✅ CORS debe estar configurado en el backend para ambos orígenes
