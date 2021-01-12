const User = require("../models/User");

module.exports = {
  Create: async (req, res) => {
    try {
      const result = await User.create(req.body);
      res.status(201).json({
        status: "success",
        message: "user added",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed",
      });
    }
  },
  Read: async (req, res) => {
    try {
      const result = await User.find();
      res.status(200).json({
        status: "success",
        message: "users found",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed",
      });
    }
  },
  Update: async (req, res) => {
    try {
      const result = await User.updateOne({ _id: req.body._id }, req.body);
      if (result.nModified !== 0) {
        return res.status(200).json({
          status: "success",
          message: "user edited",
        });
      }
      res.status(400).json({
        status: "success",
        message: "please check the updated field",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed",
      });
    }
  },
  Delete: async (req, res) => {
    try {
      const result = await User.deleteOne({ _id: req.body._id });
      if (result.deletedCount !== 0) {
        return res.status(200).json({
          status: "success",
          message: "user deleted",
        });
      }
      res.status(400).json({
        status: "Failed",
        message: "user not found",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed",
      });
    }
  },
};
