const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameDataSchema = new Schema({
  partner_1: String,
  partner_2: String,
  meaning: String,
  origin: String,
  popularity: String,
  id: Number,
});

module.exports = mongoose.model("nameData", nameDataSchema);
