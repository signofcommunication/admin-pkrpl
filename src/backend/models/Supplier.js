import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  id_supplier: {
    type: String,
    // required: [true,'Please provide a'] use uuid
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telp: {
    type: String,
    required: true,
  },
});

const Supplier = mongoose.model("Supplier", SupplierSchema);

export default Supplier;
