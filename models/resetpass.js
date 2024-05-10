const mongoose = require("mongoose");
const crypto = require("crypto");
const Client= require("../models/client");

const resettokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Client" },
  resettoken: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("passwordResetToken", resettokenSchema);