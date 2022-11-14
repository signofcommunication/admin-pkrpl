import { StatusCodes } from "http-status-codes";
import Supplier from "../../models/Supplier.js";
import mongoose from "mongoose";

async function getAllSuppliers(req, res) {
  try {
    const supplier = await Supplier.find({});
    res.status(StatusCodes.OK).json({ data: supplier });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function getSingleSupplier(req, res) {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findOne({ _id: id });

    if (!supplier) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no supplier with id ${id}` });
    }

    return res.status(StatusCodes.OK).json({ supplier });
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function postSupplier(req, res) {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(StatusCodes.CREATED).json({ supplier });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.messaage });
  }
}

async function editSupplier(req, res) {
  try {
    const { id } = req.params;
    const editSupplier = await Supplier.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res
      .status(StatusCodes.OK)
      .json({ supplier: editSupplier, message: "Data successfully updated" });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

async function deleteSupplier(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No supplier found with id: ${id}`);

    await Supplier.findByIdAndRemove(id);

    res
      .status(StatusCodes.OK)
      .json({ message: "Supplier deleted successfully" });
  } catch (error) {
    res.status(500).send(`Error deleting supplier: ${error}`);
  }
}

export {
  getAllSuppliers,
  postSupplier,
  deleteSupplier,
  editSupplier,
  getSingleSupplier,
};
