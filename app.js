const express = require("express");

const app = express();
require('dotenv/config');

const port=process.env.PORT || 3000;

const mongoose = require("mongoose");

const cors = require("cors");

const bodyParser = require("body-parser");


const uri =`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.rv6z4.mongodb.net/users`;
console.log(uri);


//app.use(cors());

app.use(bodyParser.json());

// Posts Route

const usersRoute = require('./routes/users');

app.use('/users',usersRoute);





app.get('/', (req,res)=>{
	res.send('we are home');
});




mongoose.connect(uri,
	()=>{
		console.log('connected to database');
	}
);

app.listen(port,()=>{
	console.log("server is running in  port", port);
});