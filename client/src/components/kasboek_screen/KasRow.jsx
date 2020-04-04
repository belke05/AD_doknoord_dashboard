import React, { useState } from "react";
import { Button, TableCell, TableRow, Checkbox } from "../../modules/material";

export default function KasRow({
  row,
  headCells,
  labelId,
  selectedItems,
  handleClick
}) {
  const isSelected = name => selectedItems.indexOf(name) !== -1;

  return (
    <>
      <TableRow key={row.datum}>
        <TableCell padding="checkbox">
          <Checkbox
            onClick={e => handleClick(e, row.id)}
            checked={isSelected(row.id)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
        {headCells.map(({ id, numeric }) => {
          const cellid = id;
          if (cellid === "som_totaal") {
            return (
              <TableCell align="center">{row.som_totaal.toFixed(2)}</TableCell>
            );
          }
          if (cellid === "verschil") {
            return (
              <TableCell align="center">{row.verschil.toFixed(2)}</TableCell>
            );
          }
          return <TableCell align="center">{row[cellid]}</TableCell>;
        })}
      </TableRow>
    </>
  );
}

{
  /* <TableCell align="center">{row.totaal}</TableCell>
<TableCell align="center">{row.cheque_delhaize}</TableCell>
<TableCell align="center">{row.tegoebon}</TableCell>
<TableCell align="center">{row.publiciteitsbon}</TableCell>
<TableCell align="center">{row.leeggoedbon}</TableCell>
<TableCell align="center">{row.bancontact}</TableCell>
<TableCell align="center">{row.op_krediet}</TableCell>
<TableCell align="center">{row.andere}</TableCell>
<TableCell align="center">{row.amex}</TableCell>
<TableCell align="center">{row.visa}</TableCell>
<TableCell align="center">{row.mastercard}</TableCell>
<TableCell align="center">{row.maestro}</TableCell>
<TableCell align="center">{row.visa_electron}</TableCell>
<TableCell align="center">{row.sodexo}</TableCell>
<TableCell align="center">{row.payfair}</TableCell>
<TableCell align="center">{row.accordenred}</TableCell> */
}
