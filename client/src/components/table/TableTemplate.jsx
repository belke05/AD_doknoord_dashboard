import React from "react";

/* components */
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
import EnhancedTableToolbar from "./TableToolbarTemplate";
import EnhancedTableHead from "./TableHeadTemplate";
import KasRow from "../kasboek_screen/KasRow";
import OrderRow from "../order_screen/OrderRow";

/* utils */
import {
  getComparator,
  stableSort,
  filterOutIds
} from "../../functions/functions";
import api from "../../api/orders";

/* styling */
import { enchancedTableStyle } from "../../styles/material/makeStyles";
const useStyles = makeStyles(enchancedTableStyle);

export default function TableTemplate(props) {
  const classes = useStyles();
  const { rows, orderbyName, tableName, headCells } = props;

  /* states */
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(orderbyName);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  /* handlers */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.datum);
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if (!rows || !rows.length) {
    return <div>{`momenteel geen gegevens voor ${tableName}`}</div>;
  } else {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby={tableName}
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                headCells={headCells}
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              {tableName === "kas" ? (
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.datum);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <KasRow
                          row={row}
                          classes={classes}
                          handleClick={handleClick}
                          key={row.datum}
                          selectedItems={selected}
                          selected={isItemSelected}
                          labelId={labelId}
                          emptyRows={emptyRows}
                          dense={dense}
                        ></KasRow>
                      );
                    })}
                </TableBody>
              ) : tableName === "orders" ? (
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <OrderRow
                          sandwiches={rows}
                          order={row}
                          classes={classes}
                          handleClick={handleClick}
                          key={row.id}
                          selectedItems={selected}
                          selected={isItemSelected}
                          labelId={labelId}
                          emptyRows={emptyRows}
                          dense={dense}
                        ></OrderRow>
                      );
                    })}
                </TableBody>
              ) : null}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
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
}
