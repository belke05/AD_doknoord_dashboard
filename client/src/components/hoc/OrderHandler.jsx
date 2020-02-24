import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Orders from "../pages/Orders";
import EnhancedTable from "../order_screen/EnhancedTable";

export default function OrderHandler(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://${window.location.hostname}:5000/api/orders`
      );
      const bestellingen = res.data.bestellingen;
      console.log(bestellingen);
      setOrders(bestellingen);
    }
    getData();
  }, []);

  return (
    <div>
      {/* <Orders orders={orders}></Orders> */}
      <EnhancedTable orders={orders}></EnhancedTable>
    </div>
  );
}
