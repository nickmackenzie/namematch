const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  name: String,
  email: String,
  sex: String,
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("likes", likeSchema);
