const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// TODO: Define tus rutas aquí
app.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

app.get('/productos', (req, res) => {
  res.json(productos);
});

module.exports = app;
