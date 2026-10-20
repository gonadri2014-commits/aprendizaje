# Proyectos futuros (backlog)

## Visión del proyecto integral: otra forma de trabajar

**Objetivo:** mostrar que cada operación se puede registrar en el sistema, rastrear y medir. No se busca eliminar todo el papel, sino que el control esté en el sistema.

**Gerencia asigna las prioridades.** El mapa es un menú de opciones, y cada papel se reemplaza recién cuando su versión digital está probada.

### Mapa de papeles a digitalizar (a confirmar con el censo)

| Proceso | Papel hoy (supuesto) | Reemplazo digital | Proyecto |
|---|---|---|---|
| Ingreso de producción a depósito | Planilla o remito interno | Escaneo de código de barras (producto + lote) | 1 |
| Ubicación y búsqueda de productos | Memoria o listados | Ubicación en el sistema | 1 |
| Armado de pedidos | Pedido impreso | QR del pedido + validación por escaneo | B |
| Conteos de inventario | Planilla en papel | Conteo cíclico con lector | 1 / A |
| Recepción de proveedores e importaciones | Remito del proveedor tildado a mano | Recepción por escaneo contra la orden de compra | A |
| Entrega al cliente | Remito firmado en papel | Remito digital con firma y DNI | C |
| Autorizaciones (descuentos, notas de crédito, compras, ajustes) | Firma o visto bueno verbal | Aprobación en el sistema con registro | D |
| Cobranzas y recibos | Recibo manual | Recibo emitido por el sistema | E |
| Órdenes de pago y caja chica | Planilla o comprobante en papel | Flujo de aprobación + comprobante escaneado | E |
| Reclamos y devoluciones | Nota o mail suelto | Registro con lote, motivo y estado | B / E |
| Archivo de comprobantes | Biblioteca o caja | Archivo digital indexado | E |

> Excluir o validar aparte los registros regulatorios (lotes de producción, ANMAT): puede que deban seguir el formato exigido.

### Qué falta para la presentación final

1. **Censo de papeles:** qué formulario, quién lo usa, cuántos por mes, dónde se archiva y para qué se consulta.
2. **Línea de base:** hojas por mes, horas de carga y búsqueda, errores y extravíos.
3. **Priorización:** impacto contra esfuerzo de cada papel. Arrancar por los que más se usan y más errores generan.
4. **Requisitos:**
   - Equipos: celulares o tablets, lectores, WiFi.
   - Respaldo de la información.
   - Normativa: ARCA (comprobantes), ANMAT (registros de lote), Ley 25.326 (datos personales) y Ley 25.506 (firma digital y electrónica).
5. **Cambio cultural:** referente por sector, capacitación y convivencia papel + digital durante cada piloto.
6. **Indicador general:** procesos con control en el sistema, medido etapa por etapa.

---

**En curso:** Proyecto 1, código de barras y ubicaciones.
Los proyectos de esta lista se relevan y se priorizan cuando termine el Proyecto 1.

| # | Proyecto | Para qué | Depende de |
|---|---|---|---|
| A | Reposición por lote y sector | Saber en qué lugar está cada lote (depósito, 4to piso, subsuelo) | Proyecto 1 |
| B | Armado de pedido con QR | Escanear el QR del pedido, validar producto y lote por unidad, y facturar recién cuando el pedido está completo | Proyecto 1 y confirmación de Sistemas |
| C | **Remito digital con firma** | Comprobante de entrega y medición del tiempo de entrega | Proyecto B (recomendado) |
| D | Permisos y aprobaciones | Cada puesto con su acceso y aprobaciones con registro | Relevamiento con Sistemas |
| E | Administración, tesorería y tablero | Flujo de caja, cobranzas, alertas e indicadores | Datos de Itrix |
| F | Bot de WhatsApp con catálogo | El cliente busca un producto y recibe el link | Links de productos en la web |

---

## C. Remito digital con firma

**Alcance:** entregas propias (no aplica a encomiendas).

### Circuito
1. Se emite el remito y queda registrada la hora de emisión.
2. El repartidor abre la entrega en el celular, desde un QR o una lista del día.
3. En el domicilio, la persona que recibe:
   - firma en la pantalla;
   - carga su DNI, que se valida contra la **lista de personas autorizadas por el cliente**;
   - si no está autorizada, la entrega no se cierra y se avisa al cliente.
4. Se guardan la hora, la ubicación GPS y, si hace falta, una foto del paquete.
5. El cliente recibe la constancia por mail o WhatsApp.

### Datos por entrega
`Remito | Cliente | Fecha y hora de emisión | Fecha y hora de entrega | Recibió (nombre y DNI) | Autorizado (sí o no) | Firma | GPS | Repartidor | Observación`

### Indicadores que habilita
- **Tiempo de entrega:** horas desde la emisión hasta la entrega, en promedio y por zona.
- **Entregas a tiempo:** porcentaje dentro del plazo prometido.
- **Entregas con firma de un autorizado:** porcentaje del total.
- **Entregas fallidas o reprogramadas:** porcentaje y motivo.
- **Entregas por repartidor por día.**

### Requisitos previos
- Que cada cliente cargue su **lista de personas autorizadas** (nombre y DNI).
- Celulares para los repartidores.
- Definir el plazo de entrega prometido por zona.

### Para tener en cuenta
- **Datos personales (Ley 25.326):** pedir solo nombre y DNI, informar para qué se usan y guardarlos con acceso restringido.
- Confirmar con Administración si la constancia digital reemplaza al remito firmado en papel.
- Opciones de herramienta, a evaluar en el relevamiento: el módulo de Itrix (si existe), una app de entregas o un desarrollo propio liviano conectado a los remitos.

### Para empezar a medir antes
Mientras tanto, se puede registrar a mano la fecha y hora de entrega de cada remito en una planilla. Así, cuando arranque el proyecto, ya hay una línea de base para comparar.
