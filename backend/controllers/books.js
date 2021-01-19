const Books = require('../models/Books');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getBooks = async (req, res, next) => {
  try {
    const books = await Books.find();
    res.json({ success: true, msg: 'show all books', data: books })
  } catch(err) {
    next(err)
  }
}

const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.json({ success: true, msg: 'show selected book', data: book })
  } catch(err) {
    next(err)
  }
};

const createBook = async (req, res, next) => {
  try {
    const { bookInfo, review, rating } = req.body;
    const book = await Books.create({  bookInfo, review, rating});

    res.json({ success: true, msg: 'show new book', data: book })
  } catch(err) {
    next(err)
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await Books.findByIdAndDelete(id);
    res.json({ success: true, msg: `book with id ${id} deleted`, data: book })
  } catch(err) {
    next(err) 
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { bookInfo, review, rating } = req.body;
    
    const book = await Books.findByIdAndUpdate(id, {  bookInfo, review, rating }, { new: true });
    res.json({ success: true, msg: `book with id ${id} updated`, data: book })
  } catch(err) {
    next(err)
  }
};


module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
}