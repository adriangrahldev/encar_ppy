const express = require('express');
const { Request, Response } = require('express');
const jsonDB = require('./db.json');
cors = require('cors');
const app = express();

//setting cors 

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/api/departamentos', (req, res) => {
  const departamentos = jsonDB.departamento_list || [];
  procesarDatos(departamentos);
  res.json(departamentos);
});

app.get('/api/departamentos/:id', (req, res) => {
  const departamentoId = req.params.id;
  const departamento = jsonDB.departamento_list.find((departamento) => parseInt(departamento.id) === parseInt(departamentoId));
  procesarDatos(departamento);
  res.json(departamento);
});

app.get('/api/departamentos/search/:name', (req, res) => {
  const departamentoName = req.params.name;
  const departamentos = jsonDB.departamento_list.filter((departamento) => departamento.nombre.toLowerCase().includes(departamentoName.toLowerCase()));
  procesarDatos(departamentos);
  res.json(departamentos);
});

const procesarDatos = (departamentos) => {
  departamentos.forEach(departamento => {
    departamento.pronostico_extendido_list.forEach(pronostico => {
      pronostico.alerta = getAlertType(pronostico.temperatura_max, pronostico.humedad_max, pronostico.viento_max, pronostico.probabilidad_precipitacion, pronostico.lluvia);
    });
  });
};

const getAlertType = (temp, humedad, viento, probabilidad_precipitacion, lluvia) => {
  let alertType = 'optimo';
  if (temp > 30 && humedad > 80) {
    alertType = 'peligroso';
  } else if (temp > 25 && humedad > 70) {
    alertType = 'precaucion';
  } else if (viento > 50 || probabilidad_precipitacion > 0.5) {
    alertType = 'precaucion';
  } else if (lluvia.volumen_1h > 5) {
    alertType = 'peligroso';
  }
  return alertType;
};

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
