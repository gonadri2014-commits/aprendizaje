# Análisis: conteos, ajustes y retiros internos (capacitaciones 2 y 3)

Fuente: transcripciones TurboScribe (capacitación 2: 15 min; capacitación 3: 4 min).

## Proceso 1 – Conteo y ajuste de stock (capacitación 2)
1. **Disparador**: aparece una duda o un faltante. Los chicos piden "imprimime un conteo".
2. **Itris → Stock → Saldo de stock por identificador**: se filtra por artículo (ej. 021014) y depósito **Casa Central**. Después **Acción → Vista previa**, se pasa a horizontal y se imprime. La hoja sale con la fecha y los saldos por lote.
3. **Conteo físico por lote**, comparando contra lo que dice el sistema. Si hay unidades **comprometidas** (pedido sin facturar): si el pedido está armado se cuenta lo que está en la mesa, más el stock, más la reposición.
4. **Investigación (Logística)**: en los movimientos del artículo, filtrados por lote, se busca qué justifica la diferencia:
   - ajustes viejos (ej. +1 en el inventario 2025 por mal conteo);
   - transferencias Laboratorio → Casa Central;
   - movimientos en Cuarentena (que no es nuestro depósito);
   - cambios de código.
   Si nada lo explica, se anota **"sin movimientos"**.
5. **Justificación por escrito a Laura**: "del lote X me falta 1, motivo …".
6. **Laura decide y ajusta** con número de movimiento. El motivo varía:
   - "Diferencia de inventario 2025" si corrige un mal conteo anterior;
   - "Ajuste 2026" si es una pérdida real de este año.
7. **Logística audita el ajuste**: busca el número de movimiento, verifica lote, cantidad y motivo, **firma, pone la fecha y archiva** en la carpeta de conteos.

### Hallazgos
- **El inventario 2025 se contó por unidades, no por lote.** Los errores de lote quedaron escondidos y recién aparecen cuando un lote llega a cero ("el sistema dice 1 y no está").
- **Compensación de lotes**: de un lote sobran y de otro faltan (ej. +300 / −20 / −280). El total da, pero los lotes no.
- **Lote 059: sobran 7 físicos que nunca se transfirieron a Casa Central.** Sospecha: **Producción mezcló cajitas de otro lote** dentro de una caja rotulada.
- **Lote 105: faltan 4 sin movimientos** que lo expliquen → Laura ajusta.
- **Errores en los ajustes**: Laura ajustó 24 en lugar de 32. En otro caso cargó la página 1 y no la 2. → Logística tiene que revisar todo.
- **Investigar es manual y lento** ("un chorizo" de movimientos). Todo queda en papel: hoja de conteo, justificación, firma y carpeta.
- **Conteo reactivo**: solo se cuenta cuando ya falta algo.

## Proceso 2 – Retiros internos y pedidos separados (capacitación 3)
- **Retiros de Marketing o empleados** (fotos, uso interno): se resuelven con un **papelito firmado**; cuando devuelven, se rompe. No pasa por el sistema.
- **Pedido "en negro" separado y nunca despachado**: comprometía mercadería. **Lo anularon sin avisar a Logística**, así que el sistema liberó el stock aunque físicamente seguía separado en una caja. Los pedidos nuevos lo pedían y no se encontraba → **Laura ajustó en negativo**. Meses después aparecieron → **ajuste positivo "encontradas"** (lote 383 ×4; lote 534 ×3; lote 158 ×1).
- **Riesgo de vencimiento**: la mercadería separada meses puede quedar fuera del **régimen de 6 meses de vida útil mínima** para salir.

## Problemas de fondo
| # | Problema | Efecto |
|---|---|---|
| 1 | Inventario por unidades, no por lote | Diferencias de lote ocultas por años; trazabilidad ANMAT débil. |
| 2 | Conteo solo cuando falta algo | Se detecta tarde y se investiga con información vieja. |
| 3 | Producción puede mezclar lotes en una caja | Lotes "fantasma" en Casa Central. |
| 4 | Reservas y anulaciones sin aviso | Stock comprometido en el sistema ≠ separado físicamente → ajustes innecesarios. |
| 5 | Retiros internos en papelito | Faltantes sin explicación. |
| 6 | Ajustes cargados a mano por una sola persona, con motivos libres | Errores (24 vs 32), embudo en Laura, doble control de Logística. |
| 7 | Todo el respaldo en papel | Difícil de auditar (ISO) y de medir. |

## Propuestas
**Rápidas (sin sistema nuevo)**
1. **Catálogo fijo de motivos de ajuste**: Corrección inventario anterior · Pérdida / rotura del año · Compensación de lotes · Encontrado · Mezcla de lote de Producción · Error de facturación · Vencido / baja.
2. **Compensación de lotes en un solo comprobante** (egreso lote A + ingreso lote B, como el movimiento Egreso/Ingreso visto en Itris), en lugar de dos ajustes sueltos.
3. **Planilla digital de conteos y ajustes**, compartida en lugar de papel, con: N° de conteo, artículo, lote, físico, sistema, diferencia, movimientos revisados, motivo, N° de ajuste de Laura, verificado por y fecha. Reemplaza la carpeta y mide todo.
4. **Ubicación "SEPARADOS"** con etiqueta (N° de pedido, fecha, quién pidió). Revisión semanal de lo separado hace más de 7 días, y aviso obligatorio a Logística cuando se anula un pedido.
5. **Vale de retiro interno en el sistema** (depósito "Préstamos/Marketing"), con devolución o consumo. Se deja el papelito.
6. **Conteo cíclico por lote y a ciegas** (quien cuenta no ve la cantidad del sistema): los A semanal, B mensual y C trimestral.

**Con lectores**
7. **Recepción de Producción escaneando cada caja** (producto + lote): si una cajita tiene otro lote, se detecta en la entrada.
8. **Conteo escaneando**: la diferencia por lote sale sola y la justificación se arma con los movimientos.

## Indicadores
Ajustes por mes (cantidad, unidades y $) por motivo · % diferencias por compensación de lotes · días entre conteo y ajuste · errores de carga detectados en la verificación · antigüedad de lo separado.
