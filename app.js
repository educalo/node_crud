//hago referencia al modulo express
const express = require('express');
//1º invocamos 
const app = express();

//lo añado despues para comprobar que me proporcina los get
//app.get("/", (req,res)=>{
//    res.send('hola');
//});

//2º invocamos al motor de plantillas ejs
app.set("view engine", "ejs");

//tenemos que decirle como vamos a capturar los datos de los formularios
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//damos de alta el enrutador
app.use('/', require('./router'));

//ahora podemos invocar a los metodos de express
app.listen(5000, ()=>{
    console.log("Servidor corriendo en http://localhost:5000");
});
