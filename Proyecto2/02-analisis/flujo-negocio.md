# Flujo del Negocio Actual
## Librería en Punto

El siguiente diagrama representa el funcionamiento actual de la **Librería en Punto**, basado en la entrevista realizada a su dueño, Luis Enrique Castillo. Actualmente, el negocio opera de forma completamente manual, sin sistemas digitales para inventario, ventas o clientes.

El objetivo de este análisis es identificar los puntos críticos y las oportunidades de mejora que serán abordadas en la solución propuesta.

---

### 1. Atención al cliente y venta

```text
[Cliente llega al negocio]
        |
        v
[Dueño pregunta qué necesita]
        |
        v
[Busca producto físicamente en vitrina o estantería]
        |
        v
      ¿Hay stock?
       /        \
     SÍ          NO
      |           |
      v           v
[Anota venta    [Ofrece alternativa
 en papel o      o dice "no hay"]
 mentalmente]
      |
      v
[Calcula total manualmente]
      |
      v
[Cliente paga en efectivo]
      |
      v
[Dueño entrega producto]
      |
      v
      FIN
---

```
### 2. Control de inventario (proceso paralelo)
```

[Revisión periódica (cada cierto tiempo)]
        |
        v
[Dueño revisa físicamente todo el stock]
        |
        v
[Anota en papel lo que hay y lo que falta]
        |
        v
[Decide qué productos necesita comprar]
        |
        v
[Llama a proveedor o va a centro de abastecimiento]
        |
        v
[Compra y abastece el negocio]
        |
        v
[FIN del ciclo]


---
```
### 3. Preparación para temporadas altas
```
[Temporadas altas: enero y diciembre]
        |
        v
[Dueño compra con meses de anticipación (octubre-noviembre)]
        |
        v
[Almacena mayor cantidad de útiles escolares]
        |
        v
[No utiliza sistema de predicción ni alertas]
        |
        v
[Proceso basado únicamente en experiencia personal]

---

```
### 4. Manejo de productos no vendidos
```

[Producto pasa mucho tiempo en vitrina]
        |
        v
[Dueño evalúa estado del producto]
        |
        v
   ¿Está en buen estado?
    /              \
   SÍ               NO
   |                |
   v                v
[Se vende       [Se desecha
 en oferta]      el producto]

---

```
## Flujo completo resumido (negocio actual)
```

     |INICIO|
        |
        v
[Cliente llega al negocio]
        |
        v
[Atención y búsqueda física del producto]
        |
        v
   ¿Hay disponibilidad?
    /              \
   SÍ               NO
   |                |
   v                v
[Venta manual    [Se pierde la
 y cobro en       venta]
 efectivo]
   |                |
   v                v
[Entrega]        [Cliente se retira]
   |                |
   v                v
   └───────┬────────┘
           v
         FIN

─────────────────────────────────────────

PROCESO PARALELO DE INVENTARIO:

[Revisión física periódica]
        |
        v
[Registro manual en papel]
        |
        v
[Decisión de compra empírica]
        |
        v
[Abastecimiento]
─────────────────────────────────────────

---

```
## Problemas identificados en el proceso actual

| ID | Problema | Descripción |
|:--:|----------|-------------|
| P-01 | Error humano | El dueño mencionó explícitamente que "el error humano siempre está presente" al llevar el inventario en papel. |
| P-02 | Pérdida de productos | Productos que pasan mucho tiempo sin venderse se arruinan y deben desecharse. No hay alertas preventivas. |
| P-03 | Sin trazabilidad | No hay registro histórico de ventas, productos más vendidos o épocas de mayor demanda. |
| P-04 | Tiempo perdido | La revisión física del inventario consume tiempo que podría usarse en atención al cliente. |
| P-05 | Dependencia de memoria | El dueño depende de su memoria para precios, existencias y ventas no anotadas. |
| P-06 | Sin control de gastos | No hay un registro formal de ingresos y egresos del negocio. |

---

## Oportunidades de mejora detectadas

| ID | Oportunidad | Descripción |
|:--:|-------------|-------------|
| OM-01 | Digitalización de inventario | Reemplazar el papel por una base de datos digital para evitar errores humanos. |
| OM-02 | Alertas automáticas | Notificar al dueño cuando un producto está por agotarse o lleva mucho tiempo sin venderse. |
| OM-03 | Registro digital de ventas | Llevar un control automatizado de ingresos y egresos. |
| OM-04 | Reportes automáticos | Generar reportes de stock bajo, productos más vendidos y resúmenes generales. |

---

## Tecnología actual del negocio

| Componente | Estado |
|------------|--------|
| Computadora | Sí (usada para impresiones, escaneo y trámites en línea) |
| Internet | Sí (ocasional, para trámites RENAP y antecedentes) |
| Sistema de inventario | **No** (se lleva en papel) |
| Sistema de ventas | **No** (se anota mentalmente o en papel) |
| Registro de gastos | **No** (no hay control formal) |

---

## Limitaciones actuales (según entrevista)

- **Crisis económica:** El dueño mencionó que el Estado dona útiles escolares, afectando las ventas del pequeño comerciante.
- **Productos perecederos (útiles):** El material se arruina si pasa demasiado tiempo sin venderse.
- **Adaptación del negocio:** El dueño ha buscado alternativas como ofrecer trámites del RENAP para sobrevivir.

---

## Fuente de información

Este diagrama de flujo fue elaborado con base en la entrevista realizada a **Luis Enrique Castillo**, dueño de **Librería en Punto**, y presentado en la planificación del proyecto.
```
