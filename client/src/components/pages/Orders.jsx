import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/orders";
import TableTemplate from "../table/TableTemplate";

export default function OrderHandler(props) {
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
      ></TableTemplate>
    </div>
  );
}
