const path = require('path')
const express = require('express')
const configViewEngine = (app)=>{
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //Cấu hình static file
    app.use(express.static(path.join('./src','public')))
}
// xuat 
module.exports = configViewEngine ;