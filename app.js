const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config');

const app = express();



const port=process.env.PORT || 3000;
app.use(cors());
const uri =`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.rv6z4.mongodb.net/users`;
console.log(uri);
app.use(bodyParser.json());

// Posts Route
const usersRoute = require('./routes/users');
app.use('/users',usersRoute);





// app.get('/', (req,res)=>{
// 	res.send('we are home');
// });




mongoose.connect(uri,
	()=>{
		console.log('connected to database');
	}
);

app.listen(port,()=>{
	console.log("server is running in  port", port);
});