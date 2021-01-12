const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nama: String,
  hobi: String,
  alamat: String,
  nomor_telp: Number,
});

const User = mongoose.model("users", userSchema);
module.exports = User;
