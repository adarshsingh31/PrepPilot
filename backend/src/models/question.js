const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  platform: String,
  link: String,
  topic: String,
  difficulty: String,
  importance: String,
});

module.exports = mongoose.model("Question", questionSchema);
