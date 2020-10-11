const express = require("express");
const uuid = require("uuid");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//loading the .env file
require("dotenv").config();
// connect to the database
const URI = `mongodb+srv://workbench:${process.env.MONGO_DB_PW}@testdb.rtfae.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to the database...");
  }
);

const PORT = process.env.PORT;
const pinlyApiRoute = require(path.join(__dirname, "routes/api/pinly_api"));
const redirectPinlyRoute = require(path.join(
  __dirname,
  "routes/public/redirect_pinly"
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middlewares
app.use("/pinlyapi", pinlyApiRoute);
app.use("/ly", redirectPinlyRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//get the api route

//Main app controllers

//start the server on PORT
app.listen(PORT, () => {
  console.log("Node Server has been started on PORT", PORT, "....");
});
