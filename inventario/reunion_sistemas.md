# Reunión con Sistemas — relevamiento de Itrix

**Objetivo:** saber qué tiene el sistema, qué permite hacer y qué datos se pueden sacar, antes de proponer soluciones.
**Duración sugerida:** 60–90 min. Llevar el relevamiento abierto y completar las respuestas en vivo.

## Orden de trabajo
1. Terminar la carga de ubicaciones en el sistema.
2. Reunión con Sistemas (esta guía) + completar el relevamiento por sector.
3. Pedir los datos (exportaciones) y armar la línea de base.
4. Presentar el proyecto completo con datos reales.

## 1. Módulos y licencias
- ¿Qué módulos de Itrix están contratados y cuáles se usan?
- ¿Cuántos usuarios hay? ¿Cuesta más agregar usuarios o módulos?
- ¿Quién da soporte y en qué plazos responde?

## 2. Stock y depósito
- ¿Maneja lotes y vencimientos por producto? ¿Está activado?
- ¿Maneja ubicaciones? ¿Stock por ubicación y por lote?
- ¿Acepta lectores de código de barras en ingresos, armado y despachos?
- ¿Imprime etiquetas? ¿Con qué formato (código de barras GS1-128)?
- ¿Tiene órdenes de producción y transferencias entre depósitos?
- ¿Se pueden importar datos masivos (ubicaciones, maestros) desde Excel?

## 3. Permisos y autorizaciones
- ¿Qué perfiles de usuario existen? ¿Quién puede cambiar precios, stock, clientes?
- ¿Tiene circuito de aprobaciones (compras, pagos, notas de crédito)?
- ¿Queda registro (log) de quién modificó qué y cuándo?

## 4. Administración y tesorería
- ¿Cuentas corrientes de clientes con antigüedad de deuda?
- ¿Recibos y aplicación de cobranzas en el sistema?
- ¿Conciliación bancaria? ¿Importa extractos de los bancos?
- ¿Agenda de pagos / proyección de vencimientos?

## 5. Datos e integraciones
- ¿Tiene API o exportación programada (diaria) a Excel/CSV?
- ¿Acceso de solo lectura a la base de datos para reportes?
- ¿Qué desarrollos a medida hace Itrix, con qué costo y plazo?
- ¿Hay permanencia mínima en el contrato?

## Datos a pedir (para la línea de base)
| Dato | Período | Para medir |
|---|---|---|
| Maestro de productos con código | Actual | Base del código de barras |
| Stock por producto, lote y ubicación | Actual | Exactitud de inventario, vencidos |
| Ventas por producto y cliente | Últimos 24 meses | Rotación, márgenes, reposición |
| Cuenta corriente de clientes (antigüedad) | Actual + 12 meses | Plazo de cobro, deuda vencida |
| Compras e importaciones (órdenes y llegadas) | Últimos 12 meses | Lead time real, alarma de reposición |
| Movimientos bancarios | Últimos 3 meses | Conciliación y cashflow |
| Usuarios y perfiles | Actual | Matriz de permisos |
| Reclamos / devoluciones | Últimos 6 meses | Errores de armado |

## Al cerrar la reunión
- Lista de lo que Itrix **sí** hace, **no** hace y **hace con desarrollo** (costo y plazo).
- Fecha de entrega de cada exportación.
- Responsable de Sistemas como referente del proyecto.
