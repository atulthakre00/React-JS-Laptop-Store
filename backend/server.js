const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

const cors = require('cors');
app.use(cors());

const uri = 'mongodb://127.0.0.1:27017/laptops';
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb connection established');
})

const laptopRoute = require('./routes/laptops');

app.use(express.urlencoded());
app.use(express.json());

app.use('/laptops', laptopRoute);


app.get('/', function(req, resp){
    resp.send('Hello World');
});

app.listen(port, function(req, resp){
    console.log("Running...")
});