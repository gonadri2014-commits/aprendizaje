# Proyecto 1: Código de barras (producto + lote)

**Objetivo:** que cada unidad salga de producción con un código de barras que, al escanearlo, identifique **producto y lote**. Ese código se usa para el ingreso a depósito y para armar pedidos.

**Alcance:** solo código de barras. Permisos, administración y tablero quedan para después. Lo que se aprenda en este proyecto sirve de base para armar el proyecto integral.

---

## Formato del código (propuesta)

| Dato | Identificador (AI) | Ejemplo |
|---|---|---|
| Código interno del producto | (240) | `(240)DM10452` |
| Lote | (10) | `(10)L2410A` |
| Vencimiento (opcional, si Itrix no lo trae del lote) | (17) | `(17)271031` |

- **Simbología:** GS1-128. Se lee con cualquier lector común.
- **No necesita alta en GS1:** usa el código interno que ya existe, así que no hay que inventar códigos nuevos.
- **Retail:** si más adelante se vende en cadenas, se suma el EAN de GS1 en el envase, sin cambiar este circuito.

---

## Etapas

| # | Etapa | Qué se hace | Entregable | Depende de |
|---|---|---|---|---|
| 0 | Definiciones | Confirmar con Laura, Liliana y Sistemas si Itrix guarda el código de barras y si lee producto + lote | Formato aprobado | Reunión de esta semana |
| 1 | Maestro | Limpiar el mayor de productos: códigos únicos y productos que llevan lote | Maestro validado | Mayor de productos |
| 2 | Etiqueta de producción | Programa que imprime la etiqueta actual más el código de barras | Etiqueta de prueba impresa | Modelo de impresora y programa |
| 3 | Ubicaciones | Etiqueta con código de barras para cada estante | Estantes etiquetados | Ubicaciones cargadas ✔ |
| 4 | Lectores | Probar 1 o 2 lectores en ingreso y armado | Lector probado con Itrix | Presupuesto |
| 5 | Piloto | 3 a 5 productos nacionales: producción → ingreso por escaneo → pedido validado por unidad | Informe del piloto | Etapas 1 a 4 |
| 6 | Extensión | Todos los productos, más capacitación de producción y depósito | Circuito en marcha | Piloto aprobado |
| 7 | Cierre | Medir antes y después, y listar lecciones aprendidas | Informe final y base del proyecto integral | Etapa 6 |

Las fechas se definen después de la Etapa 0, cuando se sepa qué permite Itrix.

---

## Qué medir desde ahora (para el cierre)

- Errores de armado por mes (producto, lote, cantidad).
- Tiempo promedio de armado de un pedido.
- Diferencias de stock en los conteos.
- Tiempo de ingreso de producción a depósito.

Si se toma la medición **antes** de arrancar el piloto, al final se puede mostrar el resultado con números.

---

## Decisiones pendientes

- [ ] ¿Itrix permite cargar un código de barras por producto?
- [ ] ¿Itrix lee producto + lote desde un solo código? Si no, ¿qué paso intermedio usamos?
- [ ] ¿Se incluye el vencimiento en el código o se toma del lote?
- [ ] Modelo de impresora y programa de etiquetas de producción.
- [ ] Presupuesto para lectores.
- [ ] Productos del piloto.
