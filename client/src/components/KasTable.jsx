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

function calcTotal(row) {
  return (
    row.cheque_delhaize +
    row.tegoedbon +
    row.publiciteitsbon +
    row.leeggoedbon +
    row.bancontact +
    row.op_krediet +
    row.andere +
    row.amex +
    row.visa +
    row.mastercard +
    row.maestro +
    row.visa_electron +
    row.sodexo +
    row.payfair +
    row.accordenred
  );
}

export default function KasTable({ rows, totaal }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>tabel met kas</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">Datum</TableCell>
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
            <TableCell align="right">TOTAAL</TableCell>
            <TableCell align="right">VERSCHIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.datum}>
              <TableCell align="right">{row.datum}</TableCell>
              <TableCell align="right">{row.totaal}</TableCell>
              <TableCell align="right">{row.cheque_delhaize}</TableCell>
              <TableCell align="right">{row.tegoedbon}</TableCell>
              <TableCell align="right">{row.publiciteitsbon}</TableCell>
              <TableCell align="right">{row.leeggoedbon}</TableCell>
              <TableCell align="right">{row.bancontact}</TableCell>
              <TableCell align="right">{row.opkrediet}</TableCell>
              <TableCell align="right">{row.andere}</TableCell>
              <TableCell align="right">{row.amex}</TableCell>
              <TableCell align="right">{row.visa}</TableCell>
              <TableCell align="right">{row.mastercard}</TableCell>
              <TableCell align="right">{row.maestro}</TableCell>
              <TableCell align="right">{row.visa_electron}</TableCell>
              <TableCell align="right">{row.sodexo}</TableCell>
              <TableCell align="right">{row.payfair}</TableCell>
              <TableCell align="right">{row.accordenred}</TableCell>
              <TableCell align="right">{calcTotal(row)}</TableCell>
              <TableCell align="right">{totaal - +row.totaal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
