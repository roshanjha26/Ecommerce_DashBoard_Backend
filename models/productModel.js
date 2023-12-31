const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
