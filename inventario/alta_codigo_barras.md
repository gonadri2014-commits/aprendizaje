# Alta de código de barras por producto (Argentina – GS1)

## 0. Decisión previa
| Caso | Qué usar | ¿Registrar en GS1? |
|---|---|---|
| Producto comprado a proveedor | El EAN que ya trae del fabricante | No |
| Producto propio que se vende a terceros/cadenas | GTIN-13 (EAN-13) con prefijo 779 | Sí |
| Solo uso interno (depósito, ubicaciones, lotes) | Código interno Code 128 o rango 20–29 | No |

## 1. Adhesión a GS1 Argentina (gs1.org.ar)
- Formulario de adhesión online con CUIT, datos fiscales y contacto.
- Cuota anual según facturación / cantidad de códigos.
- GS1 asigna el **prefijo de empresa** (779 + código empresa).

## 2. Armar el GTIN de cada producto
`779` + `código empresa` + `código de producto` + `dígito verificador` = 13 dígitos.
- Un GTIN distinto por cada presentación (sabor, tamaño, envase).
- La caja que agrupa unidades lleva otro código (GTIN-14 / ITF-14).
- Cargar cada código en el portal de GS1 con descripción, marca y contenido.

## 3. Lote y vencimiento
El EAN-13 identifica el producto, **no el lote**. Para escanear por lote se usa
**GS1-128 o DataMatrix** con: (01) GTIN + (10) Lote + (17) Vencimiento.
Se imprime en cada producción o recepción.

## 4. Cargar en Itrix
Agregar la columna `codigo_barras` (GTIN) al maestro de productos y habilitar
lote y ubicación en ingreso/egreso.

## 5. Impresión y validación
- Impresora de etiquetas térmica (Zebra o similar).
- Validar la legibilidad con el lector antes de etiquetar todo el stock.
