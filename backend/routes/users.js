const express = require("express");
const router = express.Router();
const {getUser,addUser,userLogin,} = require("../controllers/user-controller");
const { tokenValidation } = require("./tokenValidation");

router.get("/users/", tokenValidation, getUser);
router.post("/users/", addUser);
router.post("/login/", userLogin);

module.exports = router;
