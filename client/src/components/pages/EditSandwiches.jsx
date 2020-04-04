import React, { useEffect, useState } from "react";
import api from "../../api/sandwich";
import ProgressSpinner from "../template/ProgressSpinner";
import {
  TableContainer,
  Paper,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  EditIcon,
  makeStyles,
  Fab
} from "../../modules/material";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "naam"
  },
  { id: "price", numeric: true, disablePadding: true, label: "prijs" },
  {
    id: "ingredients",
    numeric: false,
    disablePadding: false,
    label: "ingredienten"
  },
  {
    id: "edit",
    numeric: false,
    disablePadding: false,
    label: "aanpassen"
  }
];

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function EditSandwiches(props) {
  const classes = useStyles();
  const [sandwiches, setSandwiches] = useState([]);
  const [selectedSandwich, setSelectedSandwich] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.getSandwiches().then(_sandwiches => {
      console.log("_sandwiches", _sandwiches);
      setSandwiches(_sandwiches);
    });
  }, []);

  const handleClick = sandwich => {
    setSelectedSandwich(sandwich);
    setOpen(true);
  };

  if (!sandwiches || !sandwiches.length) {
    return <ProgressSpinner waittext={`laden van sandwiches tabel`} />;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headCells.map((cell, i) => {
              return (
                <TableCell key={i} align="center">
                  {cell.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {sandwiches.map(sandwich => (
            <TableRow key={sandwich.id}>
              <TableCell component="th" scope="row">
                {sandwich.name}
              </TableCell>
              <TableCell align="center">{sandwich.price}</TableCell>
              <TableCell align="center">
                {sandwich.ingredients.join(" / ")}
              </TableCell>
              <TableCell align="center">
                <Fab
                  color="primary"
                  size="small"
                  onClick={handleClick.bind(this, sandwich)}
                >
                  <EditIcon></EditIcon>
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
