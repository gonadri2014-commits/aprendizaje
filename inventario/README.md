# Ubicaciones + Código de barras por lote (Itrix)

## Paso 1 – Datos de origen (pendiente)
Pedido: **mayor de productos con su código** desde Itrix. Idealmente en CSV/Excel con:
`codigo_producto; descripcion; codigo_barras (EAN); lote; vencimiento; stock`

## Paso 2 – Carga de ubicaciones en Itrix
- Completar `plantilla_ubicaciones.csv` (código = DEPÓSITO-ZONA-PASILLO-ESTANTE-NIVEL).
- Asignar ubicación a cada producto/lote en `plantilla_lotes.csv`.
- Adaptar columnas al formato de importación que indique Itrix.

## Paso 3 – Código de barras → producto por lote
`buscar_lote.html`: abrir en el navegador, cargar el CSV de lotes y escanear (lector USB = teclado).
Reconoce automáticamente:
- Lote solo (ej. `L2026-001`)
- EAN del producto o código interno
- GS1-128 / DataMatrix: GTIN (01) + Vto (17) + Lote (10)

## Preguntas para soporte Itrix
1. ¿Tiene importación masiva de ubicaciones/depósitos? ¿Formato del archivo?
2. ¿Maneja lotes y vencimientos por producto? ¿Ubicación por lote?
3. ¿Acepta lectura de código de barras en ingreso/egreso? ¿Soporta GS1-128?
4. ¿Tiene API o exportación automática (para tener stock por ubicación en tiempo real)?
