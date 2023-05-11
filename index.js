const express = require('express');
require ('dotenv').config(); 

console.log(process.env);




//Crear el servidor de express 

const app = express();


//Directorio public

app.use(express.static('public'));

// Rutas
app.use('/api/auth', require('./routes/auth') );
//app.use('/api/events', require('./routes/events') );





//Escuchar peticiones 

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

