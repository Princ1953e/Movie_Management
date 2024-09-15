const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movie")
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("Error", err);
  });

const userS = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  Produced: {
    type: String,
    required: true,
  },
  Directed: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Management", userS);
