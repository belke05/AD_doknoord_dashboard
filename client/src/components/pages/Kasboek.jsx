import React, { useEffect, useState } from "react";
import api from "../../api/kasboek";
import KasTable from "../KasTable";

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
  return <KasTable rows={kasboek}></KasTable>;
}
