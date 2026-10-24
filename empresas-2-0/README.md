# Empresas 2.0 — Transformación financiera para pymes

Servicio para llevar pymes desactualizadas a una gestión financiera automatizada:
conciliación automática, reportes y dashboards en tiempo real, impuestos y budget.
Diferencial: **visión de gerente financiero/operativo + desarrollo rápido con IA**.

## 1. Proceso comercial

| Etapa | Qué se hace | Entregable | Cobro |
|---|---|---|---|
| 1. Reunión inicial (1 h) | Dolores, sistema, volumen | — | Gratis |
| 2. Diagnóstico (1–2 semanas) | Cuestionario + acceso a muestras (extractos, plan de cuentas, exportes del sistema) | Informe de diagnóstico + hoja de ruta + cotización | USD 300–800 (se descuenta si contratan) |
| 3. Implementación por módulos | Desarrollo, pruebas con datos reales, capacitación | Herramientas funcionando | 50 % adelanto / 50 % a la entrega |
| 4. Abono mensual | Soporte, ajustes, reportes mensuales, nuevas mejoras | Reporte de cierre + dashboard actualizado | Fee mensual |

Regla: **nunca cotizar sin diagnóstico**. El sistema y la calidad de los datos cambian el costo 3–5x.

## 2. Catálogo de servicios y precios de referencia (USD, mercado pyme Argentina)

| Módulo | Incluye | Implementación | Abono/mes |
|---|---|---|---|
| Conciliación bancaria automática | Lectura de extractos (PDF/Excel/CSV), matching con mayor, sugerencia de asiento/tipo de comprobante | 1.500 – 4.000 | 150 – 400 |
| Dashboard financiero | Caja, saldos bancarios, cobranzas/pagos, KPIs, alertas | 2.000 – 5.000 | 200 – 500 |
| P&L / EERR automático | Estado de resultados mensual por unidad de negocio, vs año anterior | 1.500 – 3.500 | 150 – 350 |
| Cashflow proyectado | Proyección 13 semanas + 12 meses, escenarios | 1.500 – 3.500 | 150 – 350 |
| Budget automático | Presupuesto anual desde histórico + drivers, budget vs real | 1.500 – 4.000 | 150 – 400 |
| Impuestos | IVA, IIBB/Convenio Multilateral, retenciones/percepciones, papeles de trabajo, Libro IVA Digital | 1.500 – 4.000 | 200 – 500 |
| Integración con sistema/ERP | Conexión por API, base de datos o exportes automáticos | 1.000 – 5.000 | incluido |
| Pack "Empresa 2.0" | Conciliación + Dashboard + EERR + Cashflow | 5.000 – 12.000 | 500 – 1.200 |

Precio por rango según: tamaño, cantidad de bancos/sociedades, volumen de movimientos y facilidad de acceso al sistema (ver cotizador).

## 3. Cómo calcular el precio

Usar el **mayor** de estos dos valores:

1. **Por valor (recomendado)**: cobrar 3–6 meses del ahorro generado.
   Ej.: conciliación que ahorra 40 h/mes de un analista a USD 12/h = USD 480/mes → implementación USD 1.500–2.900.
2. **Piso por horas**: horas estimadas × tarifa (USD 40–60/h) × factor de complejidad.

Con IA desarrollás mucho más rápido: **no cobres por horas reales, cobrá por resultado**.

Abono mensual: 10–15 % de la implementación por mes, mínimo USD 150.

## 4. Factor de complejidad según el sistema del cliente

| Sistema | Tecnología / acceso | Dificultad |
|---|---|---|
| Solo Excel / sin sistema | Archivos | Baja (pero datos desordenados) |
| Colppy, Xubio, Contabilium, Alegra | Nube, API REST | Baja |
| Odoo | Python + PostgreSQL, API XML-RPC/JSON-RPC | Baja–Media |
| Tango Gestión | SQL Server (consultas directas) / exportes | Media |
| Bejerman, Flexxus, Holistor | SQL Server / exportes | Media |
| SAP Business One | SQL Server/HANA, Service Layer | Media–Alta |
| Sistema propio / a medida | Depende (preguntar lenguaje y base de datos) | Alta |

## 5. Stack técnico estándar

- Python (pandas) para procesamiento y conciliación.
- Dashboards: Power BI / Looker Studio (cliente con licencias) o web propia.
- Automatización: scripts programados, Make/Zapier, Playwright para descargar extractos de portales bancarios.
- Datos: Google Sheets / PostgreSQL según tamaño.

## 6. Puntos a cuidar

- **Propiedad intelectual**: el sistema de conciliación que armaste en tu empresa actual probablemente pertenece a ese empleador. Reconstruí una versión genérica propia, fuera de horario y sin código ni datos de la empresa.
- **Confidencialidad**: firmar NDA con cada cliente; trabajar con usuarios de solo lectura.
- **Alcance**: definir por escrito qué incluye cada módulo y cobrar aparte los cambios.
- **Formalidad**: facturar como monotributista o responsable inscripto según volumen.

## Archivos

- [`01-relevamiento.md`](01-relevamiento.md): cuestionario de diagnóstico para el cliente.
- [`cotizador.xlsx`](cotizador.xlsx): cotizador editable (cargar datos del cliente → precio).
- [`generar_cotizador.py`](generar_cotizador.py): regenera el cotizador.
