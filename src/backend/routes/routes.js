import { Router } from "express";
import {
  getAllProducts,
  postProducts,
  getSingleProduct,
  deleteProduct,
  editProduct,
} from "../controllers/products/index.js";
import {
  getAllEmployees,
  postEmployee,
  deleteEmployee,
  getSingleEmployee,
  editEmployee,
} from "../controllers/employees/index.js";
import {
  getAllPenjualan,
  postDataPenjualan,
  deleteDataPenjualan,
  editDataPenjualan,
  getSingleDataPenjualan,
} from "../controllers/penjualan/index.js";
import {
  getAllPembelian,
  postDataPembelian,
  deleteDataPembelian,
  editDataPembelian,
  getSingleDataPembelian,
} from "../controllers/pembelian/index.js";
import {
  getAllSuppliers,
  postSupplier,
  deleteSupplier,
  editSupplier,
  getSingleSupplier,
} from "../controllers/supplier/index.js";

const router = Router();

// Products
router.route("/products").get(getAllProducts).post(postProducts);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .patch(editProduct)
  .delete(deleteProduct);

// Employees
router.route("/employees").get(getAllEmployees).post(postEmployee);
router
  .route("/employees/:id")
  .get(getSingleEmployee)
  .patch(editEmployee)
  .delete(deleteEmployee);

// Supplier
router.route("/supplier").get(getAllSuppliers).post(postSupplier);
router
  .route("/supplier/:id")
  .get(getSingleSupplier)
  .patch(editSupplier)
  .delete(deleteSupplier);

// Data Penjualan
router.route("/penjualan").get(getAllPenjualan).post(postDataPenjualan);
router
  .route("/penjualan/:id")
  .get(getSingleDataPenjualan)
  .patch(editDataPenjualan)
  .delete(deleteDataPenjualan);

// Data Pembelian
router.route("/pembelian").get(getAllPembelian).post(postDataPembelian);
router
  .route("/pembelian/:id")
  .get(getSingleDataPembelian)
  .patch(editDataPembelian)
  .delete(deleteDataPembelian);

export default router;
