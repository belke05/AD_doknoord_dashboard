import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/orders";
import TableTemplate from "../table/TableTemplate";

const headCells = [
  { id: "lastName", numeric: false, disablePadding: true, label: "naam" },
  { id: "price", numeric: true, disablePadding: false, label: "te betalen" },
  {
    id: "pickupDate",
    numeric: true,
    disablePadding: false,
    label: "datum afhalen"
  },
  {
    id: "pickupTime",
    numeric: true,
    disablePadding: false,
    label: "tijdstip afhalen"
  },
  {
    id: "timeOrder",
    numeric: true,
    disablePadding: false,
    label: "tijdstip bestelling"
  },
  { id: "details", numeric: true, disablePadding: false, label: "details" }
];

export default function Orders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api.getOrders().then(bestelling => {
      setOrders(bestelling);
    });
  }, []);

  return (
    <div>
      <TableTemplate
        rows={orders}
        orderbyName="tijdstip afhalen"
        tableName="orders"
        setOrders={setOrders}
        headCells={headCells}
      ></TableTemplate>
    </div>
  );
}
