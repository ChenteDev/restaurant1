require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

console.log(process.env);
app.get('/', (req, res)=>{

})


app.listen(port, ()=>{
    console.log(`Servidor esta corriendo en el puerto ${port}`);
})


