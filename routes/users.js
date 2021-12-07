const express = require("express");

const router = express.Router();

const User = require('../models/user');

//get all the post
router.get('/', async (req,res)=>{
	try{
		const users = await User.find();
		res.json(users);
	}catch(err){
		res.json({message: err});
	}
});

//submit a post
router.post('/', async (req, res, next)=>{
	//res.send(req.body.displayName);
	//res.send(req.body.email);
	 const user = new User({
		 email: req.body.email,
		 displayName: req.body.displayName
		// ,
		// password: req.body.password,
		// img: req.body.img
	});
	 try{
	 	const saveUser = await user.save();
	 	res.json(saveUser);
	 }catch(err){
	 	res.json({message: err});
	 }
});

//specific post

router.get('/:userId', async (req, res) =>{
	// console.log(req.params.postId);
	try{
		const user = await User.findById(req.params.userId);
		res.json(user);
	}catch(err){
		res.json({message: err});
	}

});

//delete a post

router.delete('/:userId', async (req,res)=>{
	try{
	const removeUser = await User.remove({_id: req.params.userId});
	res.json(removeUser);
	}catch(err){
		res.json({message: err});
	}
});

//update a post
router.patch('/:userId', async (req, res)=>{
	try{
		const updateUser = await User.updateOne(
			{_id: req.params.userId}, 
			{
			$set:{
					displayName: req.body.displayName, 
					email: req.body.email
					// ,
					// password: req.body.password,
					// img: req.body.img
				}
			}
			);
		res.json(updateUser);
	}catch(err){
		res.json({message: err});
	}
});
module.exports = router;