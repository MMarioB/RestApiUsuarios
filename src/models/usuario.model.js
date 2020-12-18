var conexion = require('../../config/db.config');

var Usuario = function(usuario){
    this.nombre = usuario.nombre;
    this.apellidos = usuario.apellidos;
    this.email = usuario.email;
}

//get all usuarios
Usuario.getAllUsuarios = (result) =>{
    conexion.query('SELECT * FROM usuarios', (err, res)=>{
        if(err){
            console.log('Error while fetching usuarios', err);
            result(null,err);
        } else {
            console.log('Usuarios fetched succesfully');
            result(null,res);
        }
    })
}

//get usuario by ID
Usuario.getUsuarioByID = (id, result) =>{
    conexion.query('SELECT * FROM usuarios WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching usuarios', err);
            result(null,err);
        } else {
            result(null,res);
        }
    })
}

//post usuario nuevo
Usuario.crearNuevoUsuario = (usuarioReqData, result) =>{
    conexion.query('INSERT INTO usuarios SET ? ', usuarioReqData, (err, res) => {
        if(err){
            console.log('Error while inserting data', err);
            result(null,{status: false, message: err});
        } else {
            console.log('Usuarios created succesfully');
            result(null, res);
        }
    })
}

//update usuario
Usuario.actualizarUsuario = (id, usuarioReqData, result) =>{
    conexion.query("UPDATE usuarios SET nombre=?, apellidos=?, email=? WHERE id=?", [usuarioReqData.nombre,usuarioReqData.apellidos,usuarioReqData.email, id], (err,res)=>{
        if(err){
            console.log('Error while udpating data', err);
            result(null,err);
        } else {
            console.log('Usuarios udpated succesfully');
            result(null, res);
        }
    });
}

//delete usuario
Usuario.borrarUsuario = (id, result)=>{
    conexion.query('DELETE FROM usuarios WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Usuario;