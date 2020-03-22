import React, { useState } from "react";
import { Button, TableCell, TableRow, Checkbox } from "../../modules/material";

export default function KasRow({
  row,
  isItemSelected,
  labelId,
  selectedItems
}) {
  const isSelected = name => selectedItems.indexOf(name) !== -1;

  return (
    <>
      <TableRow key={row.datum}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={isSelected(row.datum)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
        <TableCell align="right">{row.datum}</TableCell>
        <TableCell align="right">{row.totaal}</TableCell>
        <TableCell align="right">{row.cheque_delhaize}</TableCell>
        <TableCell align="right">{row.tegoebon}</TableCell>
        <TableCell align="right">{row.publiciteitsbon}</TableCell>
        <TableCell align="right">{row.leeggoedbon}</TableCell>
        <TableCell align="right">{row.bancontact}</TableCell>
        <TableCell align="right">{row.op_krediet}</TableCell>
        <TableCell align="right">{row.andere}</TableCell>
        <TableCell align="right">{row.amex}</TableCell>
        <TableCell align="right">{row.visa}</TableCell>
        <TableCell align="right">{row.mastercard}</TableCell>
        <TableCell align="right">{row.maestro}</TableCell>
        <TableCell align="right">{row.visa_electron}</TableCell>
        <TableCell align="right">{row.sodexo}</TableCell>
        <TableCell align="right">{row.payfair}</TableCell>
        <TableCell align="right">{row.accordenred}</TableCell>
        <TableCell align="right">{row.som_totaal.toFixed(2)}</TableCell>
        <TableCell align="right">
          {row.verschil < 1 ? 0 : row.verschil.toFixed(2)}
        </TableCell>
      </TableRow>
    </>
  );
}
