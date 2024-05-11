const express = require('express');
const { Request, Response } = require('express');

const jsonDB = require('./db.json');

const app = express();

app.get('/api/departamentos', (req, res) => {
    const departamentos = jsonDB.departamento_list || [];
  res.json(departamentos);  
});

app.get('/api/departamentos/:id', (req, res) => {
    const departamentoId = req.params.id;    
    const departamento = jsonDB.departamento_list.find((departamento) =>  parseInt(departamento.id) === parseInt(departamentoId) );
    res.json(departamento);
});

app.get('/api/departamentos/search/:name', (req, res) => {
    const departamentoName = req.params.name;

    const departamentos = jsonDB.departamento_list.find((departamento) =>  departamento.nombre.includes(departamentoName) ) || [];
    
    res.json(departamentos);
});


app.listen(8000, () => {
  console.log('Server is running on port 3000');
});