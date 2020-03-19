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
    row.CHEQUE_DELHAIZE +
    row.TEGOEDBON +
    row.publiciteitsbon +
    row.LEEGGOEDBON +
    row.BANCONTACT +
    row.OP_KREDIET +
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
              <TableCell align="right">{row.Totaal}</TableCell>
              <TableCell align="right">{row.CHEQUE_DELHAIZE}</TableCell>
              <TableCell align="right">{row.TEGOEDBON}</TableCell>
              <TableCell align="right">{row.publiciteitsbon}</TableCell>
              <TableCell align="right">{row.LEEGGOEDBON}</TableCell>
              <TableCell align="right">{row.BANCONTACT}</TableCell>
              <TableCell align="right">{row.OP_KREDIET}</TableCell>
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
              <TableCell align="right">{totaal - +row.Totaal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
