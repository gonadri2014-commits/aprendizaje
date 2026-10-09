# Dental Medrano – Diagnóstico, propuestas y estrategia (09/10/2026)

## Diagnóstico
- Sistema: Itris. Nadie revisó su configuración desde la implementación.
- **Todo pasa por Laura** (25 años): cambios de stock, de lote y autorizaciones en general, en papel.
- Sin mandos medios ni matriz de autorizaciones → embudo, demoras, errores, rotación.
- Transferencias producción → depósito llegan en partes; el mismo papel se controla y corrige muchas veces.
- Cambios de lote atrasados: el sistema no refleja la realidad.
- Políticas comerciales caso por caso (donaciones/licitaciones con vencimiento corto). Ej.: una donación para un congreso bloqueó la facturación una mañana entera.
- Stock físico en 3 lugares: 4° piso, PB y logística.
- Enfoque: controles pertinentes y trazabilidad en el sistema, no desconfianza sobre las personas.

## Propuestas (orden de impacto)
1. **Matriz de autorizaciones** por tipo y monto. Laura aprueba solo excepciones.
2. **Transferencia interna producción → depósito** en sistema: recepción parcial con saldo pendiente, cierre al completar.
3. **Ajustes de stock y cambios de lote como solicitud** con motivo, aprobación según matriz y log. Regularizar el atraso con revisión por muestreo.
4. **Políticas comerciales escritas y aplicadas por regla**: FEFO con excepción para donaciones/licitaciones; lote asignado antes de una hora de corte, sin bloquear el resto.
5. **Depósitos lógicos**: 4° piso = reposición; PB + logística = despacho; transferencias entre ambos.

## Estrategia
- Medir el embudo primero (autorizaciones/día por Laura, espera, casos frenados).
- Presentarlo como alivio para Laura; que ella defina los umbrales.
- Arrancar por transferencia interna y depósitos lógicos (área propia); matriz después, con resultados.
- Alineado con la Gerencia de Operaciones a ~3 meses.

## A verificar en Itris
Módulos habilitados (menú completo con usuario administrador) · múltiples depósitos y transferencias con recepción parcial · perfiles, permisos y circuitos de aprobación · lotes/vencimientos y FEFO · log de auditoría · API o acceso a base · lo que no exista: desarrollo del proveedor o desarrollo propio.

---

## Borrador 1 – Registro del embudo (2 semanas, antes de proponer nada)
Una fila por cada cosa que llega a Laura. Lo puede llevar quien pide, no Laura.

| Fecha | Hora pedido | Tipo | Quién pide | Detalle / monto | Hora resuelto | ¿Frenó facturación o despacho? (S/N) | ¿Podría haberlo resuelto otro? (S/N) |
|---|---|---|---|---|---|---|---|

Tipos: ajuste de stock · cambio de lote · NC · donación/licitación · excepción de precio · transferencia · otro.

**Resultado a mostrar**: casos/día, espera promedio, horas de facturación frenadas, % que podría resolver otro nivel.

## Borrador 2 – Matriz de autorizaciones (umbrales los define Laura)
| Operación | Lo resuelve solo | Aprueba nivel 1 | Aprueba Laura | Registro obligatorio |
|---|---|---|---|---|
| Ajuste de stock | Diferencia ≤ __ u. o $ __ | Jefe de Logística hasta $ __ | Mayor a $ __ | Motivo + conteo |
| Cambio de lote antes de imprimir | Facturación (Noe) | — | — | Motivo |
| Cambio de lote después de imprimir | — | Jefe de Logística | Si es donación/licitación | Motivo + reimpresión |
| Nota de crédito | Vendedor < 72 h | Administración > 72 h hasta $ __ | Mayor a $ __ | Nota del cliente |
| Donación / licitación | — | Comercial define lote antes del corte | Solo vencimiento < __ meses | Lote asignado |
| Excepción de precio | — | Comercial hasta __ % | Mayor a __ % | Motivo |
| Transferencia entre depósitos | Logística | — | — | Remito interno |

## Borrador 3 – Regla para donaciones y licitaciones
- Pedido de donación/licitación entra con **fecha de corte** (ej. 16 h del día anterior al despacho).
- Comercial elige el lote antes del corte (puede ser vencimiento corto: es la excepción a FEFO). Queda **reservado** y no lo toma otro pedido.
- Si no se eligió antes del corte, sale por FEFO normal o se reprograma; **nunca frena la facturación del resto**.

## Borrador 4 – Regularizar lotes atrasados
- Productos A (más rotación): conteo con lote del 100 %.
- B y C: muestreo (ej. 20 % de ubicaciones). Si el muestreo da error > 5 %, se cuenta todo el grupo.
- Cada corrección como ajuste con motivo "regularización", aprobado según la matriz.

## Relación con lo ya armado
- **Armado por QR**: el lote viaja impreso en el pedido. Si el cambio de lote se hace antes de imprimir (Noe), se evita la mayoría de las autorizaciones a Laura.
- **Mapa del depósito**: sumar los 3 lugares físicos (4° piso / PB / logística) como depósitos con su prefijo de ubicación.
