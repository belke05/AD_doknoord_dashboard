import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/orders";
import EnhancedTable from "../pages/EnhancedTable";

export default function OrderHandler(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api.getOrders().then(bestelling => {
      setOrders(bestelling);
    });
  }, []);

  return (
    <div>
      <EnhancedTable orders={orders} setOrders={setOrders}></EnhancedTable>
    </div>
  );
}
