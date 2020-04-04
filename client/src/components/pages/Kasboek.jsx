import React, { useEffect, useState } from "react";
import api from "../../api/kasboek";
import TableTemplate from "../template/table/TableTemplate";

const headCells = [
  { id: "datum", numeric: false, disablePadding: true, label: "datum" },
  { id: "totaal", numeric: true, disablePadding: false, label: "omzet" },
  {
    id: "cheque_delhaize",
    numeric: true,
    disablePadding: false,
    label: "cheque delhaize"
  },
  {
    id: "tegoebon",
    numeric: true,
    disablePadding: false,
    label: "tegoedbon"
  },
  {
    id: "publiciteitsbon",
    numeric: true,
    disablePadding: false,
    label: "publiciteitsbon"
  },
  {
    id: "leeggoedbon",
    numeric: true,
    disablePadding: false,
    label: "leeggoedbon"
  },
  {
    id: "bancontact",
    numeric: true,
    disablePadding: false,
    label: "bancontact"
  },
  {
    id: "op_krediet",
    numeric: true,
    disablePadding: false,
    label: "op krediet"
  },
  {
    id: "andere",
    numeric: true,
    disablePadding: false,
    label: "andere"
  },
  {
    id: "amex",
    numeric: true,
    disablePadding: false,
    label: "amex"
  },

  {
    id: "visa",
    numeric: true,
    disablePadding: false,
    label: "visa"
  },
  {
    id: "mastercard",
    numeric: true,
    disablePadding: false,
    label: "mastercard"
  },
  {
    id: "maestro",
    numeric: true,
    disablePadding: false,
    label: "maestro"
  },
  {
    id: "visa_electron",
    numeric: true,
    disablePadding: false,
    label: "visa electron"
  },
  {
    id: "payfair",
    numeric: true,
    disablePadding: false,
    label: "payfair"
  },
  {
    id: "sodexo",
    numeric: true,
    disablePadding: false,
    label: "sodexo"
  },
  {
    id: "accordenred",
    numeric: true,
    disablePadding: false,
    label: "accordenred"
  },
  {
    id: "som_totaal",
    numeric: true,
    disablePadding: false,
    label: "totaal"
  },
  {
    id: "verschil",
    numeric: true,
    disablePadding: false,
    label: "verschil"
  }
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
