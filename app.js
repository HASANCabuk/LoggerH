const winston=require('./confing/winston');
const morgan = require('morgan');
const express=require('express');
const app=express();
app.use(morgan('combined',{stream:winston.stream}));
app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error=req.app.get('env')==='development'? err:{};
    winston.error('${err.status||500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}');
    res.status(err.status||500);
    res.render('error');

});
module.exports=app;
