import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Order from "../order_screen/Order";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import EnhancedTable from "../order_screen/EnhancedTable";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: { backgroundColor: "green" }
});

export default function Orders({ orders }) {
  const classes = useStyles();

  function renderOrders(orders) {
    // timePickUp,
    // orders,
    // lastName,
    // timeOrder,
    // totalPrice,
    // firstName
    return;
  }

  if (orders.length < 1) return <div>momenteel geen bestellingen</div>;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">naam</TableCell>
            <TableCell align="right">te betalen</TableCell>
            <TableCell align="right">datum afhalen</TableCell>
            <TableCell align="right">tijdstip afhalen</TableCell>
            <TableCell align="right">tijdstip bestelling geplaatst</TableCell>
            <TableCell align="right">details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <Order
              sandwiches={order.orders}
              order={order}
              classes={classes}
            ></Order>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
