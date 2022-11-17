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
import Navbar from "../Navbar";

function AddBarang() {
  const [kodeBarang, setKodeBarang] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState();
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const { postProduct } = useProvider();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      if (kodeBarang && namaBarang && harga && stok && brand && status) {
        await postProduct({
          kd_barang: kodeBarang,
          title: namaBarang,
          price: harga,
          stok,
          brand,
          status,
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
      <Navbar />
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
              <Typography variant="h5">Kode Barang</Typography>
              <TextField
                id="outlined-basic"
                label="Kode Barang"
                variant="outlined"
                value={kodeBarang}
                onChange={(e) => setKodeBarang(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Nama Barang</Typography>
              <TextField
                id="outlined-basic"
                label="Nama Barang"
                variant="outlined"
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Harga</Typography>
              <TextField
                id="outlined-basic"
                label="Harga"
                variant="outlined"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Stok</Typography>
              <TextField
                id="outlined-basic"
                label="Stok"
                variant="outlined"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ margin: "20px 0" }}
            >
              <Typography variant="h5">Brand</Typography>
              <TextField
                id="outlined-basic"
                label="Brand"
                variant="outlined"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
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

export default AddBarang;
