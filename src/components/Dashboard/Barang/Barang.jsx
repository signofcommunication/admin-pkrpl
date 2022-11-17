import React, { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useProvider } from "../../../Provider/Provider";
import Navbar from "./Navbar";

function createData(kode_barang, nama_barang, harga, stok, brand, status, id) {
  return {
    kd_barang: kode_barang,
    nama_barang,
    harga: harga.toLocaleString("en-US"),
    stok,
    brand,
    status,
    id,
  };
}

function Barang() {
  const [data, setData] = useState([]);

  const rows = data.map((d) =>
    createData(d.kd_barang, d.title, d.price, d.stok, d.brand, d.status, d._id)
  );

  const { getAllProducts, deleteProduct } = useProvider();

  async function getProducts() {
    try {
      const {
        data: { products },
      } = await getAllProducts();
      setData(products);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProduct(id);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => getProducts, []);

  console.log(data);

  return (
    <Fragment>
      <Navbar />
      <Container>
        <Grid container direction="column" style={{ padding: "20px 0" }}>
          <Grid container justify="space-between">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
                margin: "20px 0",
              }}
            >
              <Typography variant="h5">📦 Data Barang</Typography>
              <Button variant="contained" color="success">
                <Link
                  to="/barang/tambah-barang"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Tambang Barang
                </Link>
              </Button>
            </div>
          </Grid>
          <Grid item>
            {data.length == 0 ? (
              <Typography style={{ textAlign: "center" }}>
                Data is Empty
              </Typography>
            ) : (
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Kode Barang</TableCell>
                        <TableCell align="center">Nama Barang</TableCell>
                        <TableCell align="center">Harga</TableCell>
                        <TableCell align="center">Stok</TableCell>
                        <TableCell align="center">Brand</TableCell>
                        <TableCell align="center">Opsi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          {console.log(row)}
                          <TableCell>{row.kd_barang}</TableCell>
                          <TableCell align="center">
                            {row.nama_barang}
                          </TableCell>
                          <TableCell align="center">Rp{row.harga}</TableCell>
                          <TableCell align="center">{row.stok}</TableCell>
                          <TableCell align="center">{row.brand}</TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              style={{ marginRight: "10px" }}
                            >
                              <Link
                                to={`/barang/edit-barang/${row.id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Edit
                              </Link>
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleDelete(row.id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Barang;
