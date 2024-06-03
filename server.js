var express = require('express');

const app = express();

var db = require('./db.js');

// var person = require('./modules/person.js');

var menu = require('./modules/menu.js');

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('welcome to node.JS server, how can i help you');
});

var personrouter = require('./routes/personroute.js');
app.use('/person', personrouter);
app.listen(6000);
