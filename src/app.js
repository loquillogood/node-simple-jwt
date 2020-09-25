import express from 'express';  //framwork para node que nos facilita la creación de aplicaciones en menos tiempo
import logger from 'morgan';    //Para ver por consola lo que está llegando al servidor

const app= express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares 
//morgan: Ver por consola lo que va llegando al servidor
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

module.exports= app;