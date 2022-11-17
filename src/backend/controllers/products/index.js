import { StatusCodes } from "http-status-codes";
import Products from "../../models/Products.js";
import mongoose from "mongoose";

async function getAllProducts(req, res) {
  try {
    const products = await Products.find({});
    res.status(StatusCodes.OK).json({ products });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function postProducts(req, res) {
  try {
    const product = await Products.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.messaage });
  }
}

async function getSingleProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Products.findOne({ _id: id });

    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no product with id ${id}` });
    }

    return res.status(StatusCodes.OK).json({ product });
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function editProduct(req, res) {
  try {
    const { id } = req.params;
    console.log({ data: req.body, id });
    const editProduct = await Products.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ product: editProduct });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Product found with id: ${id}`);

    await Products.findByIdAndRemove(id);

    res.status(StatusCodes.OK).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).send(`Error deleting product: ${error}`);
  }
}

export {
  getAllProducts,
  postProducts,
  getSingleProduct,
  editProduct,
  deleteProduct,
};
