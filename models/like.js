const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  name: String,
  sex: String,
  id: Number,
  meaning: String,
  popularity: String,
  likedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  dateCreated: Date,
});

module.exports = mongoose.model("likes", likeSchema);
