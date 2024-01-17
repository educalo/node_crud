const conexion = require('../database/db');

//se define el save referenciado en el formulario de create con el metodo POST
exports.save = (req,res) => {
    //cogemos los valores insert.ejs definidos por body
    const user = req.body.user;
    const rol = req.body.rol;
    //console.log(user + " - " + rol);
    //realizamos un consulta insert, con los valores que hemos capturado user, rol
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error, results) => {
        //comprobamos si hay un error y sino nos redirige a la pagina principal
        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

//se define el update referenciado en el formulario de edit con el metodo POST
exports.update = (req,res) => {
    //cogemos los valores edit.ejs definidos por body
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    //console.log(user + " - " + rol);
    //realizamos un consulta update, con los valores que hemos capturado user, rol
    //pasamos estos valores con un arreglo de objetos y los ? se cogen de forma consecutiva, primero como un objeto y segundo como una variable sola
    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results) => {
        //comprobamos si hay un error y sino nos redirige a la pagina principal
        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}