import React from "react";

import EnhancedTableToolbar from "../order_screen/EnhancedTableToolbar";
import EnhancedTableHead from "../order_screen/EnhancedTableHead";
import Order from "../order_screen/Order";
import api from "../../api/orders";

import { getComparator, stableSort, filterOutIds } from "../utils/functions";
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  FormControlLabel,
  Switch,
  makeStyles
} from "../../modules/material";

import { enchancedTableStyle } from "../../styles/material/makeStyles";

const useStyles = makeStyles(enchancedTableStyle);

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("tijdstip afhalen");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = props.orders.map(n => n.id);
      console.log(newSelected, "new selected");
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const handleDelete = () => {
    api
      .deleteOrder({ orderIds: selected })
      .then(info => {
        const new_orders = filterOutIds(props.orders, info.orders);
        const new_selected = selected.filter(id => !info.orders.includes(id));
        props.setOrders(new_orders);
        setSelected(new_selected);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  if (!props.orders) {
    return <div>momenteel geen orders</div>;
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.orders.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleDelete={handleDelete}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.orders.length}
            />
            <TableBody>
              {stableSort(props.orders, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Order
                      sandwiches={row.orders}
                      order={row}
                      classes={classes}
                      handleClick={handleClick}
                      key={row.id}
                      selectedItems={selected}
                      selected={isItemSelected}
                      labelId={labelId}
                      emptyRows={emptyRows}
                      dense={dense}
                    ></Order>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
