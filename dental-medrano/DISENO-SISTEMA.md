# Dental Medrano – Diseño del sistema de stock y armado (borrador)

## Flujo
```
RECEPCIÓN ─► escanear contra OC ─► EAN + lote + vto ─► sistema indica ubicación ─► escanear ubicación ─► stock OK
REMITO ────► sistema asigna lote por FEFO ─► imprime remito con QR
ARMADO ────► armador escanea su credencial ─► escanea remito(s) ─► recorrida ordenada (pasillo/estante/nivel)
            ─► escanea producto en cada parada ─► valida tamaño y lote (otro lote = NO PASA) ─► confirmar despacho
MUESTRAS ──► depósito propio "M" ─► entra/sale solo con remito interno ─► retiro con responsable
```

## Decisiones tomadas
| Tema | Regla |
|---|---|
| Lote | Lo asigna **el sistema al generar el remito, por FEFO**. No depende de quien factura. |
| Validación | En el picking se escanea el producto: tamaño distinto = bloqueo; lote distinto = **NO PASA** (hay que armar de nuevo). Sin 100% validado no se confirma el despacho. |
| Ruta | Ítems ordenados por ubicación (pasillo → estante → nivel, en serpentina), no por orden de carga. |
| Oleada | Se pueden escanear varios remitos y armar en **una sola recorrida**; después se separa por pedido. |
| Usuarios | 1 lector inalámbrico/terminal por armador; se identifica con su **credencial** al iniciar. Queda quién armó, cuánto tardó y errores. |
| Ubicación | Código `PASILLO-ESTANTE-NIVEL` (ej. `A-03-2`) con etiqueta escaneable. Productos parecidos **no contiguos**. |
| Muestras | Depósito propio. Caja abierta para muestras → pasa a M con **remito interno**. Volver a venta → otro remito interno. Venta = solo cajas cerradas o unidades contadas. |

## Valor agregado
- **Alertas de vencimiento** (90 días) → liquidar o derivar a muestras.
- **Conteo cíclico ABC**: A semanal, B mensual, C trimestral (en vez de inventario general).
- **Recepción contra OC** escaneando lo que entra.

## Datos (tablas mínimas)
Productos · Ubicaciones · Stock por lote (depósito venta/muestra) · Remitos (con lote asignado) · Movimientos (tipo, usuario, tiempo, justificación) · Usuarios/armadores.

## Integración (según respuestas del lunes)
1. **Semanas 1-2**: maestro y remitos por Excel/CSV del ERP → prototipo web con lector USB/inalámbrico.
2. **Medio**: base de datos compartida + terminales Android.
3. **Final**: API con ERP/logística; remito con QR; dashboard en tiempo real.

## KPIs del tablero
Errores de armado %, pedidos/hora por armador, tiempo por pedido, stock por vencer (90 d), diferencias en conteo cíclico, muestras por vendedor.

## Prototipo
Ver también `PROCEDIMIENTO.md` (rutina diaria, roles y controles).

`prototipo.html` – abrir en el navegador. El lector de código de barras funciona como teclado + Enter. Datos de ejemplo.
