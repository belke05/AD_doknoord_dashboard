// hier gewoon een tabel met delete button
// anders gwn een knop die form geeft waarin nieuw broodje
// kan opegegeven worden
import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/sandwich";
import EnhancedTable from "../pages/EnhancedTable";

export default function OrderHandler(props) {
  const [sandwiches, setSandwiches] = useState([]);
  useEffect(() => {
    api.getSandwiches().then(_sandwiches => {
      setSandwiches(_sandwiches);
    });
  }, []);

  return (
    <div>
      <EnhancedTable
        orders={sandwiches}
        setOrders={setSandwiches}
      ></EnhancedTable>
    </div>
  );
}
