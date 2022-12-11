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

function createData(id, name, alamat, phone_number) {
  return {
    id,
    name,
    alamat,
    phone_number,
  };
}

function Supplier() {
  const [data, setData] = useState([]);

  const rows = data.map((d) => createData(d._id, d.name, d.address, d.telp));

  const { getAllSuppliers, deleteSupplier } = useProvider();

  async function getSuppliers() {
    try {
      const {
        data: { data },
      } = await getAllSuppliers();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteSupplier(id);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => getSuppliers, []);

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
              <Typography variant="h5">🧑 Supplier</Typography>
              <Button variant="contained" color="success">
                <Link
                  to="/supplier/tambah-supplier"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Tambah Supplier
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
                        <TableCell align="start">Id Supplier</TableCell>
                        <TableCell align="center">Nama Supplier</TableCell>
                        <TableCell align="center">Alamat</TableCell>
                        <TableCell align="center">Nomor Telp</TableCell>
                        <TableCell align="center">Status</TableCell>
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
                          <TableCell>{row.id}</TableCell>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.alamat}</TableCell>
                          <TableCell align="center">
                            {row.phone_number}
                          </TableCell>
                          <TableCell align="center">
                            {row.status ? "Tersedia" : "Tidak Tersedia"}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              style={{ marginRight: "10px" }}
                            >
                              <Link
                                to={`/supplier/edit-supplier/${row.id}`}
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

export default Supplier;
