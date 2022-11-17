import React, { Fragment, useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Grid,
  Container,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useProvider } from "../../../../Provider/Provider";
import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../Navbar";

function EditPegawai() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [namaPegawai, setNamaPegawai] = useState("");
  const [status, setStatus] = useState("");
  const { getSingleEmployee, editEmployee } = useProvider();
  const { id } = useParams();
  const navigate = useNavigate();

  async function getSingleData() {
    try {
      const {
        data: { employee },
      } = await getSingleEmployee(id);
      console.log(employee);
      setNamaPegawai(employee.username);
      setPhoneNumber(employee.phone_number);
      setStatus(employee.status);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleUpdate(id) {
    try {
      await editEmployee(id, {
        username: namaPegawai,
        name: namaPegawai,
        phone_number: phoneNumber,
        status,
      });
      navigate("/pegawai");
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (event) => {
    setStatus(event.target.value.value);
  };

  useEffect(() => getSingleData, []);

  return (
    <Fragment>
      {/* <Navbar /> */}
      <Container style={{ marginTop: "20px" }}>
        <Paper style={{ width: "70%", padding: "20px", margin: "auto" }}>
          <Grid container direction="column" spacing={1}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Nama Pegawai</Typography>
              <TextField
                id="outlined-basic"
                label="Nama Pegawai"
                variant="outlined"
                value={namaPegawai}
                onChange={(e) => setNamaPegawai(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Nomor HP</Typography>
              <TextField
                id="outlined-basic"
                label="Nomor HP"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Status</Typography>
              <Select value={status} onChange={handleChange} displayEmpty>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={{ msg: "Tersedia", value: true }}>
                  Tersedia
                </MenuItem>
                <MenuItem value={{ msg: "Tidak Tersedia", value: false }}>
                  Tidak Tersedia
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ margin: "20px 0" }}
          >
            <Button
              variant="contained"
              style={{ width: "100%" }}
              onClick={() => handleUpdate(id)}
            >
              Update
            </Button>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default EditPegawai;
