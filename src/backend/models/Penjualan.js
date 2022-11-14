import mongoose from "mongoose";

const PenjualanBarangSchema = new mongoose.Schema({
  id_pembelian: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  jumlah_jenis: {
    type: Number,
    require: true,
  },
  petugas: {
    type: String,
    default: String,
  },
});

const PenjualanBarang = mongoose.model("Penjualan", PenjualanBarangSchema);

export default PenjualanBarang;
