# Flujo de la Solución Propuesta

La solución acordada consiste en una aplicación móvil de gestión de inventario diseñada para cubrir las necesidades operativas identificadas en la mercería entrevistada. En una fase futura, se contempla una versión de escritorio que permita una gestión más completa desde un punto fijo en el negocio.

El objetivo principal es reemplazar el control de inventario manual (actualmente realizado en papel o de memoria) por un sistema digital accesible, sencillo y adaptado al nivel tecnológico del negocio.

---

## Flujo del sistema propuesto

### 1. Acceso al sistema

```
[Dueño / Encargado]
        |
        v
[Abre la aplicación móvil]
        |
        v
[Pantalla de inicio de sesión]
        |
        v
[Panel principal del negocio]
```

---

### 2. Gestión de inventario

```
[Panel principal]
        |
        v
[Módulo de Inventario]
        |
        ├── [Agregar producto]
        │         |
        │         v
        │   [Formulario: nombre, categoría, cantidad, precio]
        │         |
        │         v
        │   [Producto guardado en base de datos local]
        │
        ├── [Ver inventario actual]
        │         |
        │         v
        │   [Lista de productos con stock disponible]
        │         |
        │         v
        │   [Alerta de stock vacio< mínimo definido]
        │
        └── [Editar / Eliminar producto]
                  |
                  v
            [Cambios reflejados en tiempo real]
```

---

### 3. Registro de movimientos

```
[Panel principal]
        |
        v
[Módulo de Movimientos]
        |
        ├── [Registrar entrada de mercadería]
        │         |
        │         v
        │   [Seleccionar producto → Ingresar cantidad → Confirmar]
        │         |
        │         v
        │   [Stock actualizado automáticamente]
        │
        └── [Registrar salida / venta]
                  |
                  v
            [Seleccionar producto → Cantidad vendida → Confirmar]
                  |
                  v
            [Stock descontado automáticamente]
```

---

### 4. Reportes básicos

```
[Panel principal]
        |
        v
[Módulo de Reportes]
        |
        ├── [Reporte de productos con bajo stock]
        ├── [Historial de entradas y salidas]
        └── [Resumen general del inventario]
                  |
                  v
            [Vista en pantalla / Exportar como PDF o imagen]
```

---

### 5. Flujo completo resumido

```
INICIO
  |
  v
[Login] ──────────────────────────────────────────┐
  |                                               |
  v                                               |
[Panel Principal]                          [Sesión no válida]
  |                                               |
  ├──> [Inventario]                               v
  │       ├── Agregar producto              [Volver al login]
  │       ├── Ver stock
  │       └── Editar/Eliminar
  │
  ├──> [Movimientos]
  │       ├── Entrada de mercadería
  │       └── Salida / Venta
  │
  └──> [Reportes]
          ├── Sin  stocko
          ├── Historial
          └── Resumen general
                  |
                  v
               FIN
```

---

## Tecnología contemplada

| Componente | Descripción |
|---|---|
| Plataforma inicial | Aplicación móvil (Android) |
| Plataforma futura | Aplicación de escritorio |
| Almacenamiento | Base de datos local (SQLite) |
| Interfaz | Simple, sin tecnicismos, orientada al dueño del negocio |

---

## Limitaciones aceptadas (trade-offs de la junta)

- **Fase 1 (móvil):** No incluye integración con proveedores ni facturación, por limitaciones de tiempo y presupuesto. Saltar detalles visuales, plan de 3 meses porque el negocio esta perdiendo dinero, esta etapa se trabaja el inventario y catalogo de productos que son las facel principales, se ve la bsase de datos locales.
- 
- **Fase 2 (escritorio):** Queda como propuesta futura una vez validada la app móvil con el usuario real. Se aplica cambios notarios y posibles sugerencias proceso de dos meses.
- La solución prioriza **facilidad de uso** sobre funcionalidad avanzada, dado el perfil del negocio se maneja calidad precio.
