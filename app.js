const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');

//enviroment
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//static files
app.use(express.static('public'));

//engine view
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//middleware
app.use(morgan('dev'));


//controller
app.get('/',(req, res)=>{
    res.render('home',{
        nombre: 'Jonathan',
        titulo: 'curso node'
    });
});

app.get('/generic',(req, res)=>{
    res.render('generic',{
        nombre: 'Jonathan',
        titulo: 'curso node'
    });
});

app.get('/elements',(req, res)=>{
    res.render('elements',{
        nombre: 'Jonathan',
        titulo: 'curso node'
    });
});

app.get('*', (req, res) => {
    res.send('404 | page not found');
});

//start server
app.listen(port, () =>console.log(`server on port ${port}`));
