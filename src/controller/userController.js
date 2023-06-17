const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const { error } = require("console");
const jwt = require("jsonwebtoken");
const SECERT_KEY = process.env.SECERT_KEY;

const signup = async (req, res) => {
  //Existing User Chcek
  //Hashed Password
  //UserCreation;
  //Token Generate

  const { username, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(404).json({ message: "user already user" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECERT_KEY); //JWT Token  usage Method
    res.status(201).json({ user: result, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong " });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(404).json({ message: "user not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (matchPassword) {
      return res.status(404).json({ message: "invalid credentionals" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECERT_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (err) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { signin, signup };
