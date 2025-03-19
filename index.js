// npm i express , body-parser

const port =7777;
const express = require('express');
const app= express();
app.use(express.json());

const bodyParser=require('body-parser');
const path =require('path');
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port , () => {
    console.log(`Now Listening on port http://localhost:${port}`);
})