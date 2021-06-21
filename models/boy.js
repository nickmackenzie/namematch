const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: String,
  sex: String,
  id: Number,
  meaning: String,
  popularity: String,
});

module.exports = mongoose.model("boy", nameSchema);
