import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  stok: {
    type: Number,
    required: [true, "Please provide a stok"],
  },
  images: [String],
});

const Products = mongoose.model("Products", ProductsSchema);

export default Products;
