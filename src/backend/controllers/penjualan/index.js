import { StatusCodes } from "http-status-codes";
import Penjualan from "../../models/Penjualan.js";
import mongoose from "mongoose";

async function getAllPenjualan(req, res) {
  try {
    const data_penjualan = await Penjualan.find({});
    res.status(StatusCodes.OK).json({ data: data_penjualan });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function getSingleDataPenjualan(req, res) {
  try {
    const { id } = req.params;
    const data_penjualan = await Penjualan.findOne({ _id: id });

    if (!data_penjualan) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no data penjualan with id ${id}` });
    }

    return res.status(StatusCodes.OK).json({ data_penjualan });
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function postDataPenjualan(req, res) {
  try {
    const data_penjualan = await Penjualan.create(req.body);
    res.status(StatusCodes.CREATED).json({
      data: data_penjualan,
      message: "Data Penjualan Successfully posted!",
    });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.messaage });
  }
}

async function editDataPenjualan(req, res) {
  try {
    const { id } = req.params;
    const data_penjualan = await Penjualan.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ data: data_penjualan });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

async function deleteDataPenjualan(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No data penjualan found with id: ${id}`);

    await Penjualan.findByIdAndRemove(id);

    res
      .status(StatusCodes.OK)
      .json({ message: "Data penjualan deleted successfully" });
  } catch (error) {
    res.status(500).send(`Error deleting data penjualan: ${error}`);
  }
}

export {
  getAllPenjualan,
  postDataPenjualan,
  deleteDataPenjualan,
  editDataPenjualan,
  getSingleDataPenjualan,
};
