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

function createData(last_login, name, phone_number, status, id) {
  return {
    last_login,
    name,
    phone_number,
    status,
    id,
  };
}

function Pegawai() {
  const [data, setData] = useState([]);

  const rows = data.map((d) =>
    createData(d.last_login, d.name, d.phone_number, d.status, d._id)
  );

  const { getAllEmployees, deleteEmployee } = useProvider();

  async function getProducts() {
    try {
      const { data } = await getAllEmployees();
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteEmployee(id);
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
              <Typography variant="h5">🧑 Pegawai</Typography>
              <Button variant="contained" color="success">
                <Link
                  to="/pegawai/tambah-pegawai"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Tambah Pegawai
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
                        <TableCell>Username</TableCell>
                        <TableCell align="center">Nama</TableCell>
                        <TableCell align="center">Nomor Hp</TableCell>
                        <TableCell align="center">Last Login</TableCell>
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
                          <TableCell>{row.name}</TableCell>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">
                            {row.phone_number}
                          </TableCell>
                          <TableCell align="center">{row.last_login}</TableCell>
                          <TableCell align="center">
                            {row.status ? "Tersedia" : "Tidak Tersedia"}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              style={{ marginRight: "10px" }}
                            >
                              <Link
                                to={`/pegawai/edit-pegawai/${row.id}`}
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

export default Pegawai;
