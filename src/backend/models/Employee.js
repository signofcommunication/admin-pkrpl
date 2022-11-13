import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  phone_number: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  address: {
    type: String,
    required: [true, "Please provide a address"],
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
