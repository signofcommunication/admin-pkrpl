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

function EditSupplier() {
  const [kodeSupplier, setKodeSupplier] = useState("");
  const [namaSupplier, setNamaSupplier] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState();
  const { getSingleSupplier, editSupplier } = useProvider();
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleUpdate(id) {
    try {
      await editSupplier(id, {
        id_supplier: kodeSupplier,
        name: namaSupplier,
        address,
        telp: phoneNumber,
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  async function getSingleData() {
    try {
      const {
        data: { supplier },
      } = await getSingleSupplier(id);
      console.log(supplier);
      setKodeSupplier(supplier.id_supplier);
      setNamaSupplier(supplier.name);
      setAddress(supplier.address);
      setPhoneNumber(supplier.telp);
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
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Id</Typography>
              <TextField
                id="outlined-basic"
                label="Id Supplier"
                variant="outlined"
                value={kodeSupplier}
                onChange={(e) => setKodeSupplier(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Nama Supplier</Typography>
              <TextField
                id="outlined-basic"
                label="Nama Supplier"
                variant="outlined"
                value={namaSupplier}
                onChange={(e) => setNamaSupplier(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Address</Typography>
              <TextField
                id="outlined-basic"
                label="Alamat"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
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
              onClick={() => handleUpdate(id)}
            >
              Submit
            </Button>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default EditSupplier;
