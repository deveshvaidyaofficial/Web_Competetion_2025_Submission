const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const hashed = bcrypt.hashSync(req.body.password, 8);
  const user = await User.create({ ...req.body, password: hashed });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send("User not found");

  const valid = bcrypt.compareSync(req.body.password, user.password);
  if (!valid) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id, role: user.role }, "secret");
  res.json({ token, role: user.role });
});

module.exports = router;
