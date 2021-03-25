const Users = require("../models/user");
const { registerValidation, loginValidation } = require("./validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = (req, res) => {
  Users.find()
    .then((users) => res.json(users.filter((user) => user._id == req.user.id)))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addUser = async (req, res, next) => {  
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  const emailExists = await Users.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("User has already registered");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10),
  );

  const name = req.body.name;
  const email = req.body.email;
  const password = hashedPassword;
  const courses = req.body.courses;  
  const image=req.body.image;  

  const newUser = new Users({
    name,
    email,
    password,
    courses,
    image
  });
  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};




const userLogin = async (req, res, next) => {
  // console.log("asdas", req.body);
  const email = req.body.email;
  const password = req.body.password;

  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await Users.findOne({ email: email });
  if (!user) {
    return res.status(400).send("User not registered");
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  const userinfo = {
    name: user.name,
    email: user.email,
    courses:user.courses,
    id: user._id,
    image:user.image
  };
  const accesstoken = jwt.sign(userinfo, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.status(200).send({ accesstoken: accesstoken });
};



module.exports = { getUser, addUser, userLogin};

