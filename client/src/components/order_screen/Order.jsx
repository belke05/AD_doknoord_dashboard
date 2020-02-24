import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Sandwich_List from "./Sandwich_list";

export default function Order({ sandwiches, order }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <TableRow key={order.id}>
        <TableCell component="th" scope="row">
          {order.firstName} {order.lastName}
        </TableCell>
        <TableCell align="right">{order.price}</TableCell>
        <TableCell align="right">{order.pickupDate}</TableCell>
        <TableCell align="right">{order.pickupTime}</TableCell>
        <TableCell align="right">{order.timeOrder}</TableCell>
        <TableCell align="right">
          <Button
            style={{
              color: showDetails ? "white" : "white",
              backgroundColor: showDetails ? "red" : "green"
            }}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "verberg details" : "toon"}
          </Button>
        </TableCell>
      </TableRow>
      {showDetails && (
        <TableRow>
          <TableCell align="right" colSpan={6}>
            <div className="sandwich_list_wrapper">
              {sandwiches.map(sandwich => {
                return (
                  <Sandwich_List
                    key={sandwich.id}
                    sandwich={sandwich}
                  ></Sandwich_List>
                );
              })}
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
