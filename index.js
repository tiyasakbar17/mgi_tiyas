const express = require("express");
const cors = require("cors");
const router = require("./api/router");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Server are running on port ${port}`);
});
