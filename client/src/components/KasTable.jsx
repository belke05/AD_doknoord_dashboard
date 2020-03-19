import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
  Paper,
  Switch,
  makeStyles
} from "../modules/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function KasTable({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>tabel met kas</caption>
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell align="right">omzet</TableCell>
            <TableCell align="right">cheque delhaize</TableCell>
            <TableCell align="right">tegoedbon</TableCell>
            <TableCell align="right">publiciteitsbon</TableCell>
            <TableCell align="right">leeggoedbon</TableCell>
            <TableCell align="right">bancontact</TableCell>
            <TableCell align="right">op krediet</TableCell>
            <TableCell align="right">andere</TableCell>
            <TableCell align="right">amex</TableCell>
            <TableCell align="right">visa</TableCell>
            <TableCell align="right">mastercard</TableCell>
            <TableCell align="right">maestro</TableCell>
            <TableCell align="right">visa electron</TableCell>
            <TableCell align="right">payfair</TableCell>
            <TableCell align="right">sodexo</TableCell>
            <TableCell align="right">accordenred</TableCell>
            <TableCell align="right">totaal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.datum}</TableCell>
              <TableCell align="right">{row.totaal}</TableCell>
              <TableCell align="right">{row.CHEQUE_DELHAIZE}</TableCell>
              <TableCell align="right">{row.TEGOEDBON}</TableCell>
              <TableCell align="right">{row.publiciteitsbon}</TableCell>
              <TableCell align="right">{row.LEEGGOEDBON}</TableCell>
              <TableCell align="right">{row.BANCONTACT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
