const express = require("express");
const connectDB = require("./database/connect");
const HomeRouter = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
connectDB();

app.use("/", HomeRouter);

app.get("/get", (req, res) => {
  res.send("Hi");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
