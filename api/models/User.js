const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  hobi: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  nomor_telp: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
