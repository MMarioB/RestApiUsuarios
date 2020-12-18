const mysql = require('mysql');

// Creo la conexion con la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios_db'
});

conexion.connect(function(error){
    if(error) throw error;
    console.log('Conexion con la base de datos correcta!')
})

// Exporto para que pueda ser llamada la constante conexion desde otros archivos
module.exports = conexion;