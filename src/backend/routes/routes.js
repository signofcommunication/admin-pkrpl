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

export default router;
