# Dental Medrano – Procedimiento operativo y controles

## Equipo y roles
| Rol | Quién | Responsabilidad | No puede |
|---|---|---|---|
| **Jefe de Logística** | Vos | Aprueba ajustes de stock, reasignaciones de lote, transferencias a muestras y entre depósitos. Revisa tablero diario. | — |
| **Facturación** | 1 persona | Emite factura y remito **con lote asignado por FEFO**. Reasigna lote si depósito avisa faltante. | Mover stock físico ni ajustar inventario. |
| **Depósito 1 y 2** | 2 personas | Reciben, ubican, arman y **se controlan entre sí** (uno arma, el otro verifica). | Modificar remitos ni ajustar stock. |

> Principio: **quien factura no toca stock, quien arma no ajusta stock, y nadie controla su propio pedido.**

## Rutina diaria
| Hora | Paso | Responsable |
|---|---|---|
| 8:00 | **1° Ordenar pendientes** del día anterior (lo que quedó en RECEPCIÓN se ubica escaneando la ubicación). No se arma hasta que esté en cero. | Depósito |
| 8:30 | **2° Revisar cola de despachos (72 h)**: primero 🔴 e interior (sale con 24 h de margen extra por transporte). | Jefe + Depósito |
| 8:45 | **3° Conteo cíclico** de 10-15 ubicaciones (A semanal, B mensual, C trimestral). | Depósito (rotativo) |
| 9:00–16:00 | **Armado por oleadas**: se juntan remitos de la misma zona/transporte en una sola recorrida. | Depósito |
| Durante el día | **Recepción**: escanear contra la orden de compra; cada caja sin código de lote recibe etiqueta interna. | Depósito |
| 16:30 | **Cierre**: remitos sin despachar, faltantes, errores del día → tablero. | Jefe |

## Reglas de lote (bloqueantes)
1. El **remito trae el lote** asignado por el sistema (FEFO). Sin lote, no se arma.
2. En el armado se **escanea cada caja**: si el lote no coincide → **NO PASA** ("esta caja es de otro lote, armalo de nuevo").
3. Si un producto no tiene stock del lote asignado → **no se arma**; depósito avisa a facturación para reasignar (con OK del jefe).
4. **Sin el 100% de las líneas validadas no se puede confirmar el despacho.**
5. Toda caja sin lote en el código lleva **etiqueta interna GS1** (EAN + vencimiento + lote) impresa al recibir.

## Controles adicionales recomendados
**Recepción**
- Escaneo contra orden de compra: diferencias (cantidad, lote, producto) quedan registradas antes de firmar el remito del proveedor.
- Vencimiento mínimo aceptado (ej. no recibir con menos de 12 meses sin OK del jefe).
- Zona de **cuarentena** para mercadería dañada o con diferencias.

**Armado y despacho**
- **Doble control cruzado**: Depósito 1 arma, Depósito 2 verifica escaneando bultos antes de cerrar (y viceversa).
- **Control de bultos**: etiqueta por bulto (remito + n° bulto / total, ej. 2/3). El transporte firma cantidad de bultos.
- **Foto del pedido cerrado** (con el celular) adjunta al remito: respalda reclamos del cliente.
- Productos parecidos (tamaños): ubicaciones **no contiguas** y etiqueta de color por tamaño.
- Peso estimado vs. real del bulto (si hay balanza): detecta faltantes o sobrantes.

**Stock**
- **Conteo cíclico ABC** en lugar de inventario general; diferencia > 2% → recuento y análisis.
- Ajustes de stock **solo con aprobación del jefe** y motivo (rotura, vencimiento, error de carga).
- **Alerta de vencimiento 90 días**: liquidar, derivar a muestras o devolver al proveedor.
- Muestras: depósito propio, entrada y salida solo con remito interno y responsable.

**Seguridad e información**
- Cada uno con su usuario/credencial: todo movimiento queda con nombre y hora.
- Reclamos de clientes (producto/lote equivocado) se vinculan al armador → feedback semanal, no castigo.

## Indicadores (tablero del jefe)
| KPI | Meta inicial |
|---|---|
| % pedidos despachados en ≤ 72 h (CABA / Interior por separado) | ≥ 90% / ≥ 80% |
| Errores de armado detectados por escaneo (por armador) | tendencia ↓ |
| Reclamos de clientes por error de despacho | < 0,5% |
| Pendientes en recepción al inicio del día | 0 |
| Exactitud de inventario (conteo cíclico) | ≥ 98% |
| Stock por vencer en 90 días ($) | ↓ |
| Cobertura de stock en días (ver abajo) | según producto |

## Espacio, sobre-stock y quiebre (fase 2, con la API)
- **Cobertura (días) = stock actual ÷ venta diaria promedio.** Mucho más de 60-90 días = sobre-stock (ocupa lugar y arriesga vencimiento); menos que el plazo del proveedor = riesgo de quiebre.
- **Punto de pedido** = venta diaria × plazo del proveedor + stock de seguridad.
- **Ocupación del depósito**: % de ubicaciones usadas → anticipa falta de lugar antes de comprar.
- **Dos depósitos** (oficina Medrano + depósito de llegada): stock por depósito y **remito interno de transferencia** entre ambos, escaneado al salir y al llegar.

## Plan para el relevamiento del depósito
1. Plano a mano + fotos de cada pasillo/columna; medir estanterías.
2. **La carpa**: confirmar si es de frío. Si guarda anestesias/composites sensibles → termómetro con registro (data logger) y alerta.
3. Definir nomenclatura: `DEPÓSITO-PASILLO-COLUMNA-NIVEL` (ej. `MED-A-03-2`, `LLE-B-01-1`).
4. Rotular columnas y niveles con etiqueta de código de barras; si no hay lugar, se corre una posición y se actualiza en el sistema (nunca guardar sin escanear ubicación).
5. Ubicar los productos de más rotación (A) cerca de la mesa de armado.
6. Cargar maestro de ubicaciones (Excel) → se importa al sistema.
