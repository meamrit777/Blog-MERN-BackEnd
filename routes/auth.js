const router = require("express").Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
