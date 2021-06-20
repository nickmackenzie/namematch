const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  partner: String,
  positionBoy: Number,
  positionGirl: Number,
  dislikes:[],
  likes:[],
  backgroundChoice:String,
  password: String,
  email:String,
});
module.exports = mongoose.model("Users", userSchema);
