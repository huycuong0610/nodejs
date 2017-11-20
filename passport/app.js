const express = require('express');
const app = express();

const port = 3000;

app.set('views' , './views');
app.set('view engine' , 'ejs');

app.get('/' , (req , res)=> res.send('Welcome to passport'));

app.listen(port, ()=> console.log(`server da khoi dong tren ${port}`));