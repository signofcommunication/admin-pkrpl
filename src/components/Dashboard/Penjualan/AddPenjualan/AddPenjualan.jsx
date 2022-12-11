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
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BasicDatePicker() {
  const [value, setValue] = (React.useState < Dayjs) | (null > null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

function AddPenjualan() {
  const [kodeSupplier, setKodeSupplier] = useState("");
  const [idPenjualan, setIdPenjualan] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState();
  const { postDataPenjualan } = useProvider();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      if (kodeSupplier && idPenjualan && address && phoneNumber) {
        await postDataPenjualan({
          id_supplier: kodeSupplier,
          name: namaSupplier,
          address,
          telp: phoneNumber,
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
      <Container style={{ marginTop: "20px" }}>
        <Paper style={{ width: "70%", padding: "20px", margin: "auto" }}>
          <Grid container direction="column" spacing={1}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Id Penjualan</Typography>
              <TextField
                id="outlined-basic"
                label="Id Pembelian"
                variant="outlined"
                value={idPenjualan}
                onChange={(e) => setIdPenjualan(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Tanggal</Typography>
              <BasicDatePicker />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Nomor Telepon</Typography>
              <TextField
                id="outlined-basic"
                label="Nomor Telepon"
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

export default AddPenjualan;
