import { StatusCodes } from "http-status-codes";
import Pembelian from "../../models/Pembelian.js";
import mongoose from "mongoose";

async function getAllPembelian(req, res) {
  try {
    const data_pembelian = await Pembelian.find({});
    res.status(StatusCodes.OK).json({ data: data_pembelian });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function getSingleDataPembelian(req, res) {
  try {
    const { id } = req.params;
    const data_pembelian = await Pembelian.findOne({ _id: id });

    if (!data_pembelian) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no data pembelian with id ${id}` });
    }

    return res.status(StatusCodes.OK).json({ data_pembelian });
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function postDataPembelian(req, res) {
  try {
    const data_pembelian = await Pembelian.create(req.body);
    res.status(StatusCodes.CREATED).json({
      data: data_pembelian,
      message: "Data Pembelian Successfully posted!",
    });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.messaage });
  }
}

async function editDataPembelian(req, res) {
  try {
    const { id } = req.params;
    const data_pembelian = await Pembelian.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ data: data_pembelian });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

async function deleteDataPembelian(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No data pembelian found with id: ${id}`);

    await Pembelian.findByIdAndRemove(id);

    res
      .status(StatusCodes.OK)
      .json({ message: "Data penjualan deleted successfully" });
  } catch (error) {
    res.status(500).send(`Error deleting data penjualan: ${error}`);
  }
}

export {
  getAllPembelian,
  postDataPembelian,
  deleteDataPembelian,
  editDataPembelian,
  getSingleDataPembelian,
};
