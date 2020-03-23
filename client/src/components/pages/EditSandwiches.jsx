// hier gewoon een tabel met delete button
// anders gwn een knop die form geeft waarin nieuw broodje
// kan opegegeven worden
import React from "react";
import { useEffect, useState } from "react";
import api from "../../api/sandwich";
import TableTemplate from "../table/TableTemplate";

export default function EditSandwiches(props) {
  const [sandwiches, setSandwiches] = useState([]);
  useEffect(() => {
    api.getSandwiches().then(_sandwiches => {
      setSandwiches(_sandwiches);
    });
  }, []);

  return (
    <div>
      <TableTemplate
        orders={sandwiches}
        setOrders={setSandwiches}
      ></TableTemplate>
    </div>
  );
}
