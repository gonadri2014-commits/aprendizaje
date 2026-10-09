# Mensaje a Itris Software – Solicitud de demo y consultas

**Asunto:** Dental Medrano – Solicitud de demo y consultas sobre stock, autorizaciones e integración

Hola, ¿cómo están? Soy [Nombre], Jefe de Logística de Dental Medrano (cliente de Itris). Estamos ordenando los circuitos de depósito y queremos aprovechar al máximo el sistema. Me gustaría coordinar una **demo** y, si pueden, que nos respondan antes estas consultas, indicando para cada punto si **ya está disponible** (y cómo se configura), si **se puede desarrollar** (costo y plazo estimado) o si **no es posible**.

**1. Transferencias de stock con autorización**
- Transferencias entre depósitos (producción → logística, y entre nuestros depósitos internos) con circuito de **solicitud y aprobación**.
- **Recepción parcial**: si la transferencia llega incompleta, aprobar solo lo recibido, dejar el saldo pendiente y cerrarla cuando llegue el resto.
- Que cada transferencia mantenga **lote y vencimiento** por renglón.

**2. Autorizaciones y permisos**
- Perfiles por usuario con permisos por operación (solicitar / aprobar / ejecutar).
- Circuitos de aprobación por tipo y monto para: ajustes de stock, cambios de lote, notas de crédito, donaciones y excepciones de precio.
- **Log de auditoría**: quién hizo cada cambio, cuándo y con qué motivo.

**3. Lotes y vencimientos**
- Asignación automática de lote configurable: FEFO (vence primero), vencimiento más largo, vencimiento más corto o manual.
- Que el criterio dependa del **tipo de pedido** (cliente, licitación, donación, sucursal, exportación) con un vencimiento mínimo por tipo.
- Reserva de lote para un pedido.

**4. Impresión de pedidos y remitos**
- Imprimir el pedido **ordenado por código** de producto.
- Agregar **código de barras o QR** al pedido/remito con producto, cantidad y lote por renglón.
- Imprimir **etiquetas** con código de barras (producto, lote y vencimiento) al ingresar mercadería.

**5. Integración (API)**
Queremos desarrollar una aplicación de logística con lectores de código de barras y QR. Necesitamos saber si existe **API o web services** que permitan:
- **Leer**: pedidos con sus renglones y lotes asignados, stock por lote/vencimiento/depósito, maestro de productos.
- **Escribir**: confirmar armado de pedidos, registrar transferencias y recepciones, ajustes de stock y cambios de lote (respetando los permisos y la auditoría del sistema).
- Documentación técnica, forma de autenticación, entorno de prueba y costo.
- Si no hay API: ¿se puede tener acceso de solo lectura a la base y una forma soportada de importar movimientos?

**6. Otros**
- Múltiples depósitos/ubicaciones dentro del depósito.
- Herramientas de workflow, eventos o reportes de Itris: ¿las podemos configurar nosotros o lo hacen ustedes?
- Módulos que tenemos contratados hoy y cuáles habría que sumar.

Somos una empresa de productos médicos (ANMAT, ISO 9001 / 13485), así que la trazabilidad por lote es clave.

Quedo atento para coordinar la demo. ¡Gracias!

[Nombre]
Jefe de Logística – Dental Medrano
[Teléfono] · [Mail]
