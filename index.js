// npm i express , body-parser , ejs , mysql2 , slashes@2.0.0 , md5

const port =7777;
const express = require('express');
const app= express();
app.use(express.json());


const bodyParser=require('body-parser');
const path =require('path');
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"./views"));


let db_M=require('./database');
global.db_pool = db_M.pool;

global.addSlashes    = require('slashes').addSlashes;
global.stripSlashes  = require('slashes').stripSlashes;


const crs_R = require('./Routers/Course_R');
app.use('/Crs',crs_R);




app.get( '/' , (req,res) =>{
    res.render( "index" , {} );
});


app.listen(port , () => {
    console.log(`Now Listening on port http://localhost:${port}`);
})