import React from "react";
import PropTypes from "prop-types";

import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox
} from "../../modules/material";

const headCells = [
  { id: "datum", numeric: false, disablePadding: true, label: "datum" },
  { id: "omzet", numeric: true, disablePadding: false, label: "omzet" },
  {
    id: "cheque_delhaize",
    numeric: true,
    disablePadding: false,
    label: "cheque delhaize"
  },
  {
    id: "tegoedbon",
    numeric: true,
    disablePadding: false,
    label: "tegoedbon"
  },
  {
    id: "publiciteitsbon",
    numeric: true,
    disablePadding: false,
    label: "publiciteitsbon"
  },
  {
    id: "leeggoedbon",
    numeric: true,
    disablePadding: false,
    label: "leeggoedbon"
  },
  {
    id: "banccontact",
    numeric: true,
    disablePadding: false,
    label: "bancontact"
  },
  {
    id: "op_krediet",
    numeric: true,
    disablePadding: false,
    label: "op krediet"
  },
  {
    id: "andere",
    numeric: true,
    disablePadding: false,
    label: "andere"
  },
  {
    id: "amex",
    numeric: true,
    disablePadding: false,
    label: "amex"
  },

  {
    id: "visa",
    numeric: true,
    disablePadding: false,
    label: "visa"
  },
  {
    id: "mastercard",
    numeric: true,
    disablePadding: false,
    label: "mastercard"
  },
  {
    id: "maestro",
    numeric: true,
    disablePadding: false,
    label: "maestro"
  },
  {
    id: "visa_electron",
    numeric: true,
    disablePadding: false,
    label: "visa electron"
  },
  {
    id: "payfair",
    numeric: true,
    disablePadding: false,
    label: "payfair"
  },
  {
    id: "sodexo",
    numeric: true,
    disablePadding: false,
    label: "sodexo"
  },
  {
    id: "accordenred",
    numeric: true,
    disablePadding: false,
    label: "accordenred"
  },
  {
    id: "totaal",
    numeric: true,
    disablePadding: false,
    label: "totaal"
  },
  {
    id: "verschil",
    numeric: true,
    disablePadding: false,
    label: "verschil"
  }
];

export default function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all orders" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};
