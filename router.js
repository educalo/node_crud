const express = require('express');
const router = express.Router();

//funcion flecha con dos parametros con req que es lo requerido y res que es la respuesta
//router.get('/contacto', (req,res)=>{
//    res.send('CONTACTO');
//})


//cuando accedamos a la raiz que nos muestre los datos
const conexion = require('./database/db');   

/*router.get('/', (req,res)=>{
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error){
            throw error;
        }else{
            res.send(results);
        }
    })
})*/

router.get('/', (req,res)=>{
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
})


//como mejora añadimos las vistas de nuestro motor de plantillas
//router.get('/', (req,res)=>{
    //se nos muestra el fichero index.ejs dentro de la carpeta views
    //en el fichero index.ejs <% /* segun el motor de ejs tenemos que encerrar las variables de la siguiente manera   https://ejs.co/*/ %>
    //res.render('index', { var1:"Esto es una variable"});
    //res.render('index');
//})

//ruta para crear registros
router.get('/create', (req,res)=>{
            res.render('create');
})

//ruta para editar registros
router.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {        
        if (error) {
            throw error;
        }else{
            //nuestra plantilla edit con un solo resultado que es que hemos actualizado
            res.render('edit', {user:results[0]});
        }
    })
})

//ruta para eliminar el registro
router.get('/delete/:id', (req, res) =>{
    const id =req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error,result) => {
        if (error) {
            throw error;
        }else{
            //nuestra plantilla raiz cuando elimina
            res.redirect('/');
        }
    })

})

//metodos
const crud = require('./controllers/crud');
//crud.save hace referencia a controllers crud.js
router.post('/save', crud.save);
router.post('/update', crud.update);


//temos que exportarlo este enrutador como un modulo
module.exports = router;