const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blackListSchema = new Schema({
  name: String,
  sex: String,
  id: Number,
  meaning: String,
  popularity: String,
  blackListedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateCreated: Date,
});

module.exports = mongoose.model("blacklist", blackListSchema);
