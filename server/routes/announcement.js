const router = require("express").Router();
const Announcement = require("../models/Announcement");

router.post("/", async (req, res) => {
  res.json(await Announcement.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Announcement.find());
});

module.exports = router;
