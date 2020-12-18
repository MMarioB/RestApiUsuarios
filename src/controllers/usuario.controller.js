const UsuarioModel = require('../models/usuario.model');

// Obtenemos la lista de todos los usuarios
exports.getUsuariosList = (req, res) => {
    //console.log('Aqui esta la lista de todos los usuarios');
    UsuarioModel.getAllUsuarios((err, usuario) =>{
        console.log('Aqui estamos!');
        if(err)
        res.send(err);
        console.log('Usuario', usuario);
        res.send(usuario);
    })
}

// Obtener un usuario mediante ID
exports.getUsuarioByID = (req, res)=> {
    //console.log('Usuario por ID');
    UsuarioModel.getUsuarioByID(req.params.id, (err, usuario)=>{
        if(err)
        res.send(err);
        console.log('Un usuario', usuario);
        res.send(usuario);
    })
}

// Crear un nuevo usuario
exports.crearNuevoUsuario = (req,res) =>{
    const usuarioReqData = new UsuarioModel(req.body);
    console.log('UsuarioReqData', usuarioReqData);
    
    // Compruebo si introducen un usuario null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        UsuarioModel.crearNuevoUsuario(usuarioReqData, (err, usuario)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Usuario agregado', data: usuario});
        })
    }
}

// Actualizar usuario
exports.actualizarUsuario = (req, res) =>{
    const usuarioReqData = new UsuarioModel(req.body);
    console.log('UsuarioReqData update', usuarioReqData);
    
    // Compruebo si introducen un usuario null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        UsuarioModel.actualizarUsuario(req.params.id, usuarioReqData, (err, usuario)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Usuario actualizado', data: usuario});
        })
    }
}

// Borrar usuario
exports.borrarUsuario = (req, res)=>{
    UsuarioModel.borrarUsuario(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Usuario deleted successully!'});
    })
}