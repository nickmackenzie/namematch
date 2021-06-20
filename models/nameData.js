const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameDataSchema = new Schema({
  name: String,
  sex: String,
  meaning: String,
  origin: String,
  popularity: String,
  id: Number,
});

module.exports = mongoose.model("nameData", nameDataSchema);
