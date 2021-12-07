const express = require("express");

const app = express();

const mongoose = require("mongoose");

//const cors = require("cors");

const bodyParser = require("body-parser");



require('dotenv/config');

//app.use(cors());

app.use(bodyParser.json());

// Posts Route

const usersRoute = require('./routes/users');

app.use('/users',usersRoute);





app.get('/', (req,res)=>{
	res.send('we are home');
});




mongoose.connect(process.env.DB_CONNECTIOn,
	()=>{
		console.log('connected to database');
	}
);

app.listen(3000);