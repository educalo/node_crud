const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log("Conectado con la bd mysql");
})

//lo exportamos el modulo conexion, de esta manera lo podemos utilizar
module.exports = conexion;