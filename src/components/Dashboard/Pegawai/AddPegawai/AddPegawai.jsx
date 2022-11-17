import React, { Fragment, useState } from "react";
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
import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";

function AddPegawai() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [namaPegawai, setNamaPegawai] = useState("");
  const [status, setStatus] = useState("");
  const { postEmployee } = useProvider();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      if (phoneNumber && namaPegawai && status) {
        await postEmployee({
          username: namaPegawai,
          name: namaPegawai,
          phone_number: phoneNumber,
          status,
          last_login: new Date().getTime(),
        });
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (event) => {
    setStatus(event.target.value.value);
  };

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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default AddPegawai;
