const router = require("express").Router();
const Student = require("../models/Student");

router.post("/", async (req, res) => {
  res.json(await Student.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Student.find());
});

module.exports = router;
