const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("client"));

mongoose.connect("mongodb://127.0.0.1:27017/premiumCMS");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/students", require("./routes/student"));
app.use("/api/announcements", require("./routes/announcement"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
