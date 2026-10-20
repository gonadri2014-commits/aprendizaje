# Nuevas prioridades (oct-nov 2026)

**Código de barras: en pausa.** Se retoma después de los inventarios y la conciliación.

| Prioridad | Tarea | Fecha | Con quién |
|---|---|---|---|
| 1 | Inventario del laboratorio | Octubre | Laboratorio |
| 2 | Conciliación bancaria automática (ayudar a Elvia) | Ya | Elvia |
| 3 | Inventario final | Fin de noviembre | Depósito |
| — | Logística diaria | Mientras tanto | Fede (cubre provisoriamente) |

---

## Conciliación bancaria automática

### Problema
- Todo entra **mezclado en una cuenta de depósito**: cobranzas, Posnet, tarjetas, FIMA y pagos.
- Hay que comparar **lo contabilizado contra el extracto** y revisar si está bien imputado.
- En el cashflow, la imputación de cada recibo se indica en un comentario de texto libre.

### Cómo se separa la cuenta mezclada

| Tipo de movimiento | Cómo se reconoce en el extracto | Contra qué se concilia |
|---|---|---|
| Transferencias de clientes | Crédito con CUIT o nombre del cliente | Recibos de cobranza |
| Posnet / tarjetas de débito | Liquidación neta por lote | Cupones del día, menos aranceles y retenciones |
| Tarjetas de crédito | Liquidación por fecha de pago | Liquidación de la tarjeta |
| FIMA (suscripción y rescate) | Concepto FIMA | Cuenta de inversiones |
| Pagos a proveedores | Débito, transferencia o cheque | Órdenes de pago |
| Impuestos y gastos bancarios | Ley 25.413, IIBB, comisiones, IVA | Cuentas de gastos e impuestos |

### Reglas de cruce (en orden)
1. Mismo importe y misma referencia: **conciliado**.
2. Mismo importe con fecha ±3 días: **conciliado, a revisar**.
3. Varios movimientos que suman un importe (por ejemplo, los cupones de una liquidación de Posnet): **conciliado en grupo**.
4. Sin pareja: queda **pendiente**.

### Resultado
- **Conciliados:** cruzan automáticamente.
- **En el banco y no en contabilidad:** falta registrar (gastos, impuestos, cobranzas no imputadas).
- **En contabilidad y no en el banco:** cheques no cobrados, errores de carga.
- **Mal imputados:** el importe cruza, pero la cuenta o el cliente no coinciden.

### Comentario estándar en el cashflow
Para que la imputación se pueda leer en forma automática, escribirla siempre con el mismo formato:

```
IMP: <cliente o cuenta> | REC: <n° de recibo>
```

Ejemplo: `IMP: CLI-01234 | REC: 0001-00004567`

### Datos que necesito
- [ ] Modelo de conciliación de noviembre (es la base del formato).
- [ ] Extracto bancario del mes, en Excel o CSV.
- [ ] Mayor de la cuenta banco en Itrix, del mismo período.
- [ ] Liquidaciones de Posnet y de las tarjetas de crédito.
- [ ] Movimientos de FIMA.
- [ ] Plan de cuentas, o al menos las cuentas donde se imputa.
- [ ] Ejemplo del cashflow con sus comentarios.

---

## Inventarios
- **Laboratorio (octubre)** y **final (noviembre)**: el conteo se hace contra la ubicación cargada en el sistema.
- Usar la planilla de ubicaciones (`carga_ubicaciones.xlsx`): se cuenta por especialidad y ubicación, y las diferencias van en la columna Observación.
- Este inventario también deja ordenada la base para retomar el código de barras.
