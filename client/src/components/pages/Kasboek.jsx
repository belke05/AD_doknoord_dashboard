import React, { useEffect, useState } from "react";
import api from "../../api/kasboek";
import KasTable from "../KasTable";
import { KasBoekRow } from "../../models/KasBoekRij";

export default function Kasboek() {
  const [kasboek, setKasboek] = useState([]);
  useEffect(() => {
    api
      .getKasboek()
      .then(res => {
        console.log(res, "response");
        const rijen = res.map(rij => {
          return new KasBoekRow(
            rij.datum,
            rij.cash,
            rij.cheq_spec,
            rij.maaltijdcheque,
            rij.cheque_delhaize,
            rij.tegoedbon,
            rij.bon_pub_dll,
            rij.bon_pub_lev,
            rij.publiciteitsbon,
            rij.leeggoedbon,
            rij.ecocheques,
            rij.mobile,
            rij.online_betaling,
            rij.bancontact,
            rij.elec_maaltcheq,
            rij.terugbet_lotto,
            rij.kredietkaart,
            rij.op_krediet,
            rij.andere_totaal,
            rij.andere,
            rij.promo,
            rij.kadobon,
            rij.elec_ecocheques,
            rij.elec_cadeau,
            rij.afronding,
            rij.totaal_lade,
            rij.tegoedbon_crea,
            rij.totaal,
            rij.amex,
            rij.visa,
            rij.mastercard,
            rij.maestro,
            rij.visa_electron,
            rij.sodexo,
            rij.payfair,
            rij.accordenred,
            rij.publiciteitsbon_totaal
          );
        });
        console.log("rijen", rijen);
        setKasboek(res);
      })
      .catch(err => console.log(err));
    return () => {};
  }, []);
  return <KasTable rows={kasboek}></KasTable>;
}
