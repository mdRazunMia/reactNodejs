const mongoose = require("mongoose");


//Schema without validation
 const UserSchema = mongoose.Schema({
	email: String,
	displayName: String
 });

  

//Schema with validation

// const UserSchema = mongoose.Schema({
// 	displayName: {
// 		type: String
// 	},
// 	email: {
// 		type: String
	//}
	// ,
	// password: {
	// 	type: String,
	// 	required: true
	// },
	// img: {
	// 	type: String,
	// 	required: false
	// }
//});

module.exports = mongoose.model('Users', UserSchema);

