import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  kd_barang: {
    type: String,
    required: [true, "Please provide a kode barang"],
  },
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
  brand: {
    type: String,
    required: [true, "Please provide a brand"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

export default Products;
