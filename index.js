// npm i express , body-parser , ejs , mysql2

const port =7777;
const express = require('express');
const app= express();
app.use(express.json());


const bodyParser=require('body-parser');
const path =require('path');
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"./views"));



app.listen(port , () => {
    console.log(`Now Listening on port http://localhost:${port}`);
})


app.get( '/' , (req,res) =>{
    res.render( "index" , {} );
});