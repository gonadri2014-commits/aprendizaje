# Análisis: PC – movimientos a sucursales (video capacitación 6, 13/10/2026)

Video de 12 s. Audio no transcripto (sin acceso al modelo de voz): análisis solo de imagen. Capturas en `fotos/pc-*.png`.

## Qué se ve
1. **Formulario de movimiento de stock (papel, GDK/Densell)** completado a mano: código de producto, una columna marcada con "X" (¿ingreso/egreso?), **lote escrito a mano** en la columna "Análisis", tilde (✓) en cantidad, firmas abajo (realizó / autorizó). 13 renglones.
2. **Itris → "Detalle de movimientos de stock"** filtrado por número `%11153`: 13 renglones del 08/10/2026, comprobante **0001-00011153**, tipo **AJE (ajuste)**, cantidad **−1,00** cada uno, con artículo y lote. Los lotes coinciden con el papel (ZH0389, ZH0367, P10175, YE0265…). Son productos como Resin Duo, MTA Bio Repair, Clamp Kit Brinker, Acrílico Temporary C+B y taladros Densell Glass/Translux.
3. Debajo aparecen comprobantes **FCR** (Suministros White) y **FRS** (García Corsaro) que no tienen nada que ver: el filtro `%11153` trae cualquier número que contenga esos dígitos.
4. El control consiste en **comparar renglón por renglón el papel contra la pantalla** y tildar.

## Circuito actual (deducido)
Pedido del local → se arma → **se escribe a mano** código + lote en el formulario → firma → alguien **lo tipea en Itris como ajuste negativo** → otra persona **controla papel vs pantalla** → sale a la sucursal.

## Problemas
| # | Problema | Consecuencia |
|---|---|---|
| 1 | El envío a sucursal se registra como **AJUSTE**, no como **transferencia entre depósitos** | El stock "desaparece" del central. Si no hay un ajuste positivo espejo, la sucursal no tiene stock en sistema. Los envíos se mezclan con roturas y diferencias reales: no se puede medir pérdidas ni exactitud de inventario. Trazabilidad ANMAT lote → sucursal débil. |
| 2 | **Triple manipulación**: escribir a mano, tipear y controlar | Tiempo y errores de transcripción (lotes manuscritos ambiguos: Y/V, 0/O, E/F). |
| 3 | Lote elegido y escrito a mano | No hay regla (FEFO) ni validación. |
| 4 | Búsqueda por `%11153` | Trae comprobantes ajenos: el control puede confundirse. |
| 5 | Autorización = firma en papel | No queda en el sistema quién autorizó. |
| 6 | La sucursal (aparentemente) no confirma la recepción en sistema | Diferencias en destino sin registro. |

## Mejoras
**Ya, sin sistema nuevo**
1. Registrar el PC como **transferencia Central → Sucursal X** (Itris maneja depósitos: verificar la opción). Si no existe, al menos usar un **tipo de comprobante propio "PC"**, separado de AJE.
2. **Formulario impreso desde Itris** (a partir del pedido del local, con códigos y lote asignado) en lugar de escrito a mano. Se tilda sobre lo impreso.
3. Controlar con filtro **exacto** (Tipo = AJE/PC y Número = 0001-00011153) o con el comprobante impreso, no con `%`.

**Con lectores (fase siguiente)**
4. PC impreso con **QR** → armado escaneando caja por caja (producto + lote) → no se libera incompleto (demo `armado-qr.html`).
5. La **sucursal recibe escaneando**: recepción parcial con diferencias registradas.
6. Indicadores: PC por día, renglones, tiempo de armado y diferencias en destino.

## Para confirmar
- ¿El ajuste negativo tiene un **ajuste positivo** en el depósito de la sucursal? (filtrar el mismo número por depósito)
- ¿Qué significa la columna marcada con "X" en el formulario?
- ¿Quién completa, quién tipea y quién controla? ¿Cuánto tarda cada paso?
- ¿Cuántos PC por día y cuántos renglones?
- ¿La sucursal controla al recibir? ¿Cómo informa diferencias?

## Videos 3, 4 y 5 (baja resolución, parcialmente legibles)
- **Video 3:** varias hojas del formulario de movimiento de stock con **correcciones en rojo**, círculos, firmas y sello, y un comprobante Dental Medrano 0001-0001186x. El papel se revisa y corrige varias veces antes de cargarlo.
- **Video 4 (hallazgo importante):** pantalla de Itris de un **movimiento** con campos *Depósito origen* ("DEPÓSITO CASA CENTRAL"), *Chofer*, *Nro. envío mercadería*, *Tipo de asiento* y *Orden de servicio*. El detalle tiene columnas **Tipo (Egreso / Ingreso)**, **Lote** y **Ubicación**. → Itris ya maneja **depósito origen/destino y ubicación** en los movimientos: probablemente se puedan hacer transferencias en lugar de ajustes. Captura: `fotos/itris-movimiento-egreso-ingreso.png`.
- **Video 5:** otra pantalla de carga con detalle (artículo, descripción, lote, cantidad) y un menú desplegable; no se lee.
