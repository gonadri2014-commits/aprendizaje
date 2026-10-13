# Análisis: aceptación de transferencias desde Producción (capacitación 4)

## Cómo se hace hoy
1. Producción (u otro sector) **carga la transferencia en Itris** y manda el papel con el número (ej. 825).
2. Logística: **Itris → Transferencias de stock** (una sola opción) → Enter hasta listar → busca el número del papel.
3. Cada transferencia aparece **dos veces**: un renglón del depósito de **salida/origen** y otro del de **entrada**. Se confirma con Enter.
4. **Si hay diferencias en el control, no se puede hacer nada en el sistema**: no hay recepción parcial. Se espera o **se devuelve la mercadería**.
5. Las transferencias con **observaciones (ej. "OP")** se aceptan por separado. Las demás se pueden **juntar y aceptar todas juntas**.
6. Se anota el número de aceptación arriba del papel ("para no generar más papel") y se archiva.

## Conclusiones
- **Itris ya tiene el circuito "origen carga, destino acepta"**: lo que se buscaba para dejar de cargar a mano. Coincide con la pantalla del video 4 (depósito origen, chofer, Egreso/Ingreso, lote, ubicación).
- **Lo que falta es la recepción parcial.** Hoy una diferencia frena todo y obliga a devolver mercadería físicamente.
- **Los envíos a sucursales (PC) se cargan como AJUSTE** (ver `ANALISIS-PC-SUCURSALES.md`) aunque el sistema tiene transferencias. Pasarlos a transferencia es un cambio de procedimiento, no un desarrollo.
- En la aceptación no se controla el lote caja por caja → es una posible entrada de los lotes mezclados (lote 059 de la capacitación 2).

## Propuestas
1. **PC a sucursales como transferencia** Casa Central → Sucursal, aceptada por la sucursal. Sin desarrollo.
2. **Mientras no haya recepción parcial**:
   - Producción emite **una transferencia por lote o por entrega física**, así cada entrega parcial es una transferencia completa.
   - Si hay diferencia: **Producción anula y re-emite** por lo real, sin devolver físicamente. La diferencia queda con motivo en la planilla.
3. **Pedir a Itris**: "aceptar con diferencias", aceptando lo recibido y generando automáticamente la devolución o el saldo pendiente con motivo.
4. **Control de lote al aceptar**: hoy es visual. Con lector, se escanea cada caja contra la transferencia.
5. **Dejar de imprimir**: si la transferencia queda aceptada en Itris con usuario y fecha, el papel con el número anotado sobra. Archivar solo excepciones.
6. **Indicadores**: transferencias con diferencia (% y motivo), tiempo desde la carga hasta la aceptación, devoluciones a Producción.
