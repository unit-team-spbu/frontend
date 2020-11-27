const express = require('express');
const app = require('express')();
 const path = require('path');
 const port = process.env.PORT || 8080;
 

 
 //здесь наше приложение отдаёт статику
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, 'build')));
 
 //простой тест сервера

 
 //обслуживание html
 app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

 app.listen(port, () => {
     console.log("React app started (port 8080)");
 });