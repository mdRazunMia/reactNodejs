const mongoose = require("mongoose");


//Schema without validation
// const PostSchema = mongoose.Schema({
// 	title: String,
// 	description: String,
// });

  

//Schema with validation

const UserSchema = mongoose.Schema({
	displayName: {
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

