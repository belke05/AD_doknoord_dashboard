import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { readableDate } from "../utils/functions";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Sandwich_List from "./Sandwich_list";
import Checkbox from "@material-ui/core/Checkbox";

export default function Order({
  sandwiches,
  order,
  handleClick,
  isItemSelected,
  labelId,
  selectedItems
}) {
  const [showDetails, setShowDetails] = useState(false);
  const isSelected = name => selectedItems.indexOf(name) !== -1;

  return (
    <>
      <TableRow
        hover
        onClick={event => handleClick(event, order.id)}
        role="checkbox"
        aria-checked={isSelected(order.id)}
        tabIndex={-1}
        key={order.name}
        selected={isSelected(order.id)}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={isSelected(order.id)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          {order.firstName} {order.lastName}
        </TableCell>
        <TableCell align="right">{order.price}</TableCell>
        <TableCell align="right">{order.pickupDate}</TableCell>
        <TableCell align="right">{order.pickupTime}</TableCell>
        <TableCell align="right">{readableDate(order.timeOrder)}</TableCell>
        <TableCell align="right">
          <Button
            style={{
              color: showDetails ? "white" : "white",
              backgroundColor: showDetails ? "red" : "green"
            }}
            onClick={e => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? "verberg details" : "toon"}
          </Button>
        </TableCell>
      </TableRow>
      {/* {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={7} />
        </TableRow>
      )} */}
      {showDetails && (
        <TableRow>
          <TableCell align="right" colSpan={7}>
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
