import { StatusCodes } from "http-status-codes";
import Employee from "../../models/Employee.js";
import mongoose from "mongoose";

async function getAllEmployees(req, res) {
  try {
    const employee = await Employee.find({});
    res.status(StatusCodes.OK).json({ data: employee });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function getSingleEmployee(req, res) {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ _id: id });

    if (!employee) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `There is no employee with id ${id}` });
    }

    return res.status(StatusCodes.OK).json({ employee });
  } catch (e) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
  }
}

async function postEmployee(req, res) {
  try {
    const employee = await Employee.create(req.body);
    res.status(StatusCodes.CREATED).json({ employee });
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.messaage });
  }
}

async function editEmployee(req, res) {
  try {
    const { id } = req.params;
    const editEmployee = await Employee.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ employee: editEmployee });
  } catch (e) {
    console.log(e);
    res.status(StatusCodes.BAD_REQUEST).json({ error: e.message });
  }
}

async function deleteEmployee(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Employee found with id: ${id}`);

    await Employee.findByIdAndRemove(id);

    res
      .status(StatusCodes.OK)
      .json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).send(`Error deleting employee: ${error}`);
  }
}

export {
  getAllEmployees,
  postEmployee,
  deleteEmployee,
  editEmployee,
  getSingleEmployee,
};
