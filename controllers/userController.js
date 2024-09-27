const asyncHanlder = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHanlder(async (req, res) => {
  const { username, email, password } = req.body;
  if(!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvaiable = await User.findOne({ email }); 
  if(userAvaiable) {
    res.status(400);
    throw new Error("User already register!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hash password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if(user) {
    res.status(201).json({_id: user.id, email: user.email});
  } else {
    res.status(400);
    throw new Error("User data us not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHanlder(async (req, res) => {
  res.json({ message: "Login the user" });
});

//@desc user info
//@route POST /api/users/login
//@access private
const currentUser = asyncHanlder(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
