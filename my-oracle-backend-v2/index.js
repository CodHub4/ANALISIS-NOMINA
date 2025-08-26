const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Importar solo las rutas que EXISTEN actualmente
const nomDepartamentoRoutes = require('./routes/nomDepartamentoRoutes');
const nomPuestoRoutes = require('./routes/nomPuestoRoutes');
const nomTipoContratoRoutes = require('./routes/nomTipoContratoRoutes');
const nomPeriodicidadRoutes = require('./routes/nomPeriodicidadRoutes');
const nomBancoRoutes = require('./routes/nomBancoRoutes');
const nomJornadaRoutes = require('./routes/nomJornadaRoutes');
const nomEmpleadoRoutes = require('./routes/nomEmpleadoRoutes');
const nomEmpleadoContactoRoutes = require('./routes/nomEmpleadoContactoRoutes');
const nomContratoRoutes = require('./routes/nomContratoRoutes');

// ==============================================
// RUTAS QUE NO EXISTEN ACTUALMENTE - COMENTADAS
// ==============================================
// const nomEmpleadoCuentaRoutes = require('./routes/nomEmpleadoCuentaRoutes');
// const nomSalarioHistRoutes = require('./routes/nomSalarioHistRoutes');
// const nomIgssParamRoutes = require('./routes/nomIgssParamRoutes');
// const nomIsrTablaRoutes = require('./routes/nomIsrTablaRoutes');
// const nomConceptoRoutes = require('./routes/nomConceptoRoutes');
// const nomPeriodoNominaRoutes = require('./routes/nomPeriodoNominaRoutes');
// const nomNominaRoutes = require('./routes/nomNominaRoutes');
// const nomNominaDetalleRoutes = require('./routes/nomNominaDetalleRoutes');
// const nomHorasExtraRoutes = require('./routes/nomHorasExtraRoutes');
// const nomAusenciaRoutes = require('./routes/nomAusenciaRoutes');
// const nomVacacionRoutes = require('./routes/nomVacacionRoutes');
// const nomPrestamoRoutes = require('./routes/nomPrestamoRoutes');
// const nomPrestamoCuotaRoutes = require('./routes/nomPrestamoCuotaRoutes');
// const nomBonoRoutes = require('./routes/nomBonoRoutes');
// const nomLiquidacionRoutes = require('./routes/nomLiquidacionRoutes');

app.use(express.json());
app.use(cors());

// Configurar solo las rutas que EXISTEN
app.use('/departamentos', nomDepartamentoRoutes);
app.use('/puestos', nomPuestoRoutes);
app.use('/tipos-contrato', nomTipoContratoRoutes);
app.use('/periodicidades', nomPeriodicidadRoutes);
app.use('/bancos', nomBancoRoutes);
app.use('/jornadas', nomJornadaRoutes);
app.use('/empleados', nomEmpleadoRoutes);
app.use('/contactos-empleado', nomEmpleadoContactoRoutes);
app.use('/contratos', nomContratoRoutes);

// ==============================================
// RUTAS QUE NO EXISTEN - COMENTADAS
// ==============================================
// app.use('/cuentas-empleado', nomEmpleadoCuentaRoutes);
// app.use('/historial-salarios', nomSalarioHistRoutes);
// app.use('/parametros-igss', nomIgssParamRoutes);
// app.use('/tabla-isr', nomIsrTablaRoutes);
// app.use('/conceptos', nomConceptoRoutes);
// app.use('/periodos-nomina', nomPeriodoNominaRoutes);
// app.use('/nominas', nomNominaRoutes);
// app.use('/detalles-nomina', nomNominaDetalleRoutes);
// app.use('/horas-extra', nomHorasExtraRoutes);
// app.use('/ausencias', nomAusenciaRoutes);
// app.use('/vacaciones', nomVacacionRoutes);
// app.use('/prestamos', nomPrestamoRoutes);
// app.use('/cuotas-prestamo', nomPrestamoCuotaRoutes);
// app.use('/bonos', nomBonoRoutes);
// app.use('/liquidaciones', nomLiquidacionRoutes);

app.get('/', (req, res) => {
  res.send('Servidor Nóminas backend funcionando');
});

app.listen(port, () => {
  console.log(`Servidor backend de Nóminas escuchando en http://localhost:${port}`);
});
