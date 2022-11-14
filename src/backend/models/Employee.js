import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  phone_number: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  last_login: {
    type: Date,
    default: Date.now(),
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
