const mongoose = require("mongoose");


//Schema withour validation
// const PostSchema = mongoose.Schema({
// 	title: String,
// 	description: String,
// });

  

//Schema with validation

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Users', UserSchema);

