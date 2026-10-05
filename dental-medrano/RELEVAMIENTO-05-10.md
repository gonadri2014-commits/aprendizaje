# Dental Medrano – Relevamiento 05/10/2026: respuestas, hallazgos y cambios al plan

Fotos en `fotos/`. Respuestas numeradas según `CUESTIONARIO-05-10.md`.

## 1. Lo que sabemos

| Tema | Situación actual |
|---|---|
| Sistema | **Itrix**, soporte del proveedor. Tiene módulo de stock con **lotes, vencimientos y depósitos**. API/base: **a confirmar con Sistemas**. |
| Lote | Noe (Facturación) lo asigna en Itrix al aprobar el pedido (FIFO) y **sale impreso en el pedido**. La factura no lleva lote. |
| Remito | Solo para **expresos**. Ya trae **lote, vencimiento y nº de despacho (D:)** por renglón (ver `fotos/remito-expreso-ejemplo.jpg`, formulario *Log 06 Rev 01*). El resto sale con factura duplicada firmada. |
| Códigos | Código Itrix tipo `021083-00000`. **Ningún producto tiene código de barras** (ni propios, ni importados). Tamaños sin código distinto. |
| ANMAT | **Todas las familias** con trazabilidad → lote y vencimiento obligatorios en todo. |
| Frío | No hay productos que requieran frío. La carpa no es de frío; guarda productos. |
| Depósitos | Uno de **importaciones** (llegan, se controlan y quedan ahí; en piso sobre pallets, ver video). Depósito principal con **9 pasillos**. Otros sectores bajo llave. |
| Estanterías | Pasillo 1: 1 frente y medio. Pasillo 2: completo. Pasillo 4: recinto de 6×6 con estantes adentro. Resto: 6 m de largo, 90 cm de profundidad, **7 estantes + repositorio arriba**. Hasta pasillo 7 **ya ordenado** por pasillo y estante, por familia (ej. 1 = piedras diamante/fresones con rangos de códigos, 2-3 = porcelanas Noritake, 4-5 = endodoncia). Cajas con código escrito a mano. |
| Pedidos | ~15/día (pico 20), algunos de **15 hojas**. Ventas carga → Noe imprime → los chicos arman → **controla el jefe de logística**. |
| Errores | **Impresión duplicada → pedido armado dos veces.** **Pedido aprobado que no se imprime → pedido perdido.** |
| 72 h | Se mide desde la **fecha de aprobación**. |
| Cambio de lote | Noe puede cambiarlo antes de imprimir. Donaciones/sucursales: solo Laura (Administración). |
| Despachos | 1 camioneta. Propios salen temprano con lo armado el día anterior. Expresos 17 h. Retiros 9-11 y 15-17 h. Cronograma por día y zona (abajo). |
| Muestras | Solo para **licitaciones**, sin código propio, sin pérdidas. → **baja prioridad**. |
| NC | < 72 h: vendedor en el momento. > 72 h: documentación + nota del cliente a Laura. Maquinaria: revisa Carlos (control y pruebas). |
| COT | **No se genera hoy.** Seguir con Laura. |
| IIBB Misiones | Contadora + Facturación. |
| Compras | Con orden de compra, sin remito. Importaciones: 2-3 por mes, algunos meses ninguna. |
| Inventario | Total a fin de año; dicen que el sistema coincide con el físico. |
| Equipamiento | **Solo 2 PC** en logística. Sin lectores ni impresora de etiquetas. Presupuesto: "se puede conseguir". |
| Reportes | Logística **no reporta nada** hoy. |

### Cronograma de impresión de pedidos (foto)
| | Lun | Mar | Mié | Jue | Vie |
|---|---|---|---|---|---|
| Retira | ✔ | ✔ | ✔ | ✔ | |
| Expreso | ✔ | ✔ | ✔ | ✔ | |
| Zona Norte | | | | ✔ | |
| Sucursales | ✔ | | ✔ | | |
| Zona Facultad | ✔ | ✔ | | ✔ | |
| Zona Oeste | ✔ | | | | |
| Zona Sur | | | | ✔ | |

Viernes: pedidos de librería y pagos. Zonas de promotores: AMBA/MDQ/La Plata (Norberto-Gustavo) · Interior BA, Cuyo y Patagonia (Hugo) · Litoral y NEA (Emanuel) · Córdoba y NOA (Matías).

### Datos adicionales (05/10, tarde)
- **Circuito real de control:** arman el pedido → **Facturación emite** → **jefe de logística controla bultos** → recién ahí se despacha. La factura se emite *después* de armar (bien: puede reflejar lo armado).
- **En cada control** se verifica cantidad, lote y código de producto, y se registra **quién retira**.
- **Tipos de pedido:** cliente · licitación · sucursal/local · producción · donación · dueños (Daniel, Liliana). Cada tipo con su regla.
- **Pedidos de locales:** todos los días. Si dicen **"stock"** se pueden despachar; si dicen **"CC"** salen cuanto antes; si no, esperan. *(Confirmar qué significa "CC".)*
- **Depósito externo (de terceros):** **cobra por bulto**. Se traen de 8 a 10 pallets por vez. La idea es traer siempre que se pueda para bajar el costo.
- **Revisión semanal de stock:** que siempre haya stock en el depósito principal para que les aparezca a los vendedores (reposición desde el externo).
- **Alta de producto nuevo** en Itrix antes de poder ingresarlo al depósito.
- **Exportación:** poco volumen. Hoy hay envíos sin documentación (cajas sin rotular). El sistema **no va a modelar egresos sin documento**: con ANMAT/ISO 13485 todo egreso tiene que quedar con lote y comprobante. Conviene definirlo con Administración, porque como responsable de logística vos firmás la trazabilidad.
- **Pendiente:** relevar las **tareas administrativas de Noe** que pasan a logística.

## 2. Hallazgos que cambian el plan

1. **Itrix ya hace lote, vencimiento y depósito.** No hay que duplicarlo: el sistema nuevo es una **capa de ejecución** (ubicación, picking validado, control, KPIs) que lee de Itrix. Verificar que Itrix asigne por **vencimiento (FEFO)** y no por fecha de ingreso (FIFO); con ANMAT conviene FEFO.
2. **No existe ningún código de barras.** La Fase 0 pasa a ser **codificar**:
   - Etiqueta por producto con código Itrix en Code128 (en la ubicación y en la caja).
   - Etiqueta de lote (código + lote + vencimiento) al ingresar.
   - **Producción propia (GDK/Densell):** pedir que impriman código de barras con lote y vencimiento en el envase. Es la solución de fondo.
   - Importados: pedir GS1-128 a los proveedores en las próximas órdenes.
3. **Lo que se escanea es el PEDIDO, no el remito** (la mayoría sale con factura). Pedir a Itrix que el pedido impreso tenga el **nº de pedido en código de barras**.
4. **El problema más urgente no es el lote, es el control de pedidos** (duplicados y perdidos). Quick win: tablero de estados **Aprobado → Impreso → Armado → Controlado → Despachado**, con un solo número por pedido (imprimir dos veces avisa) y alarma de "aprobado y no impreso".
5. **Regla de lote:** en depósito se **bloquea siempre**. El lote solo lo cambia Noe en Itrix antes de imprimir (Laura en donaciones/sucursales); el pedido se reimprime con el nuevo lote.
6. **Oleadas por zona** según el cronograma: se arma el día anterior todo lo de la zona que sale mañana, en una sola recorrida.
7. **Ubicaciones:** se aprovecha el orden actual. Propuesta de código `PP-L-CC-N`:
   - `PP` pasillo (01-09) · `L` lado (I/D mirando desde la entrada) · `CC` columna · `N` estante 1-7 · `R` = repositorio arriba.
   - Ej. `05-D-03-4`; repositorio `05-D-03-R`.
   - Pasillo 4 (recinto 6×6): sus estantes internos como columnas.
   - Depósito de importaciones: zonas de piso marcadas con cinta (`IMP-A1`, `IMP-A2`…) y etiqueta por pallet.
   - Al bajar del repositorio a la ubicación de picking se registra una **reposición**.
10. **Tipos de pedido con prioridad automática.** Orden de armado: **CC/urgente de locales → vencen 72 h → expresos (17 h) → zona de mañana → "stock" de locales**. Donación y sucursal: lote solo lo cambia Laura. Dueños y producción: siempre con comprobante interno.
11. **Depósito externo = costo variable.** Indicadores: bultos en el externo, costo mensual y **cobertura en días** del depósito principal. La revisión semanal genera la **lista de reposición** (qué traer en los próximos 8-10 pallets) priorizando lo que se queda sin stock en la vitrina de ventas y lo que más cuesta tener afuera.
12. **Control final = control de bultos escaneado.** Etiqueta por bulto (pedido + nº 1/3), escaneo de cada bulto al controlar y registro de **quién retira** (chofer, expreso, cliente). Cierra la trazabilidad lote → pedido → bulto → quien retiró.
8. **Muestras** pasa a ser solo un estanco "Licitaciones/Donaciones". El foco son **pedidos, ubicaciones y lotes**.
9. **COT:** confirmar con Laura/contadora si aplica a los repartos dentro de Provincia de Buenos Aires (zonas Norte/Oeste/Sur, La Plata). Puede ser un riesgo fiscal hoy.

## 3. Plan revisado

| Fase | Semanas | Qué |
|---|---|---|
| **0 – Orden y control** | 1-2 | Tablero de estados de pedidos con tipo y prioridad (corta duplicados y perdidos). Lista semanal de reposición desde el depósito externo. Relevamiento de ubicaciones pasillo por pasillo en planilla. Reunión con Sistemas Itrix. Cotizar equipamiento. Primer reporte semanal. |
| **1 – Codificación** | 3-5 | Etiquetas de ubicación y producto (Code128). Etiquetas de lote al ingreso. Pedido impreso con código de barras. Gestión con Producción para el código en envase. |
| **2 – Picking validado** | 6-9 | Escaneo de pedido → recorrida → escaneo de producto + lote (bloqueo). Control final. Integración con Itrix (lectura de pedidos, lotes, stock). |
| **3 – Indicadores** | 10-13 | Conteo cíclico, vencimientos, KPIs, informe a Presidencia, propuesta de Gerencia de Operaciones. |

**Equipamiento mínimo a cotizar:**
- 2 lectores inalámbricos 1D/2D.
- 1 impresora térmica de etiquetas (más rollos).
- Opcional: 1 tablet o terminal para el control final.

## 4. Pendiente

**Con Sistemas / Itrix**
- ¿API o acceso a la base? Si no hay, ¿exportación automática (CSV) de pedidos aprobados con fecha, renglones, lote y estado?
- ¿Se puede agregar código de barras al formato del pedido y del remito?
- ¿La asignación de lote es FEFO o FIFO? ¿Se puede configurar?
- ¿Itrix maneja ubicación dentro del depósito? ¿Tiene módulo de colectores?
- Exportar maestro de productos y ventas de 12 meses (para la clasificación ABC).
- ¿Itrix registra cuándo se imprime un pedido (para detectar duplicados)?

**Con el equipo**
- ¿Qué significa "CC" en los pedidos de locales?
- Tareas de Noe que pasan a logística.
- Costo por bulto del depósito externo y cantidad de bultos almacenados hoy.

**Preguntas que quedaron sin responder**
- 2, 25, 28-30, 32, 43, 45, 49-54, 56, 59.
- Prioridad: **49** (procedimientos ISO del área: el remito ya es formulario *Log 06*, hay que ver qué otros existen) y **51** (responsable de Calidad).
