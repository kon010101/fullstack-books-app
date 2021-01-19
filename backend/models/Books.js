const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookInfo: {
    date: {
      type: Date,
      required: [false],
    },
    pages: {
      type: Number,
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      maxlength: [50, "Only max 50 chars are allowed for the title"],
    },
    authors: {
      type: String,
      required: [true, "Please add an author"],
      maxlength: [50, "Only max 50 chars are allowed for the title"],
    },
    thumbnail: {
      type: String,
      required: false,
    },
    categories: {},
  },
  review: {
    content: {
      type: String,
    },
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Books", BookSchema);
