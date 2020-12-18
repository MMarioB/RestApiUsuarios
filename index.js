const express = require('express');
const bodyParser = require('body-parser');

// Llamo a express
const app = express();

// Configuro el puerto del servidor
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// Defino la ruta principal
app.get('/', (req,res) => {
    res.send('Hola Mundo!');
});

// Importo la ruta de los usuarios
const usuariosRoutes = require('./src/routes/usuario.route');

// Creo la ruta de los usuarios
app.use('/api/v1/usuario', usuariosRoutes);

// Listener del puerto
app.listen(port, () => {
    console.log(`Express Server is running at port ${port}`);
});