import React, { useEffect, useState } from "react";
import api from "../../api/kasboek";
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

export default function Kasboek() {
  const [kasboek, setKasboek] = useState([]);
  useEffect(() => {
    api
      .getKasboek()
      .then(res => {
        console.log(res, "response");
        const rijen = res.map(rij => {
          return rij;
        });
        setKasboek(rijen);
      })
      .catch(err => console.log(err));
    return () => {};
  }, []);
  return (
    <TableTemplate
      rows={kasboek}
      orderbyName="datum"
      tableName="kas"
      headCells={headCells}
    ></TableTemplate>
  );
}
