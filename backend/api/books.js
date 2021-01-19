const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

const api = express.Router();

api
  .route("/")
  .get(getBooks)
  .post(createBook)

api
  .route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook)

// locahost:5000/users/:id/orders
// api
//   .route('/:id/orders')
//   .get(getUserOrders)

module.exports = api;