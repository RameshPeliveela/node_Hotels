//This file is responsible for connection between mongodb and node server

var mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/hotels';

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected successfully');
});

db.on('disconnected', ()=>{
    console.log('disconnected');
});

db.on('error', ()=>{
    console.log('error');
});

module.exports = db;