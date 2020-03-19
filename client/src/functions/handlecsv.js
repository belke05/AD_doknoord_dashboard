import readXlsxFile from "read-excel-file";
import { KasBoekRow } from "../models/KasBoekRij";

export default async function(file) {
  const rows = await readXlsxFile(file);
  const middelen = rows.slice(2, 28);
  const andere = rows[28];
  let info = {
    datum: rows[0][0].replace("Selectie: ", ""),
    ...betaalmiddelen(middelen),
    ...kaarten(andere),
    ...maaltijdcheques(andere)
  };
  const rij = new KasBoekRow(
    info.datum,
    info.cash,
    info.cheq_spec,
    info.maaltijdcheque,
    info.cheque_delhaize,
    info.tegoedbon,
    info.bon_pub_dll,
    info.bon_pub_lev,
    info.publiciteitsbon,
    info.leeggoedbon,
    info.ecocheques,
    info.mobile,
    info.online_betaling,
    info.bancontact,
    info.elec_maaltcheq,
    info.terugbet_lotto,
    info.kredietkaart,
    info.op_krediet,
    info.andere_totaal,
    info.andere,
    info.promo,
    info.kadobon,
    info.elec_ecocheques,
    info.elec_cadeau,
    info.afronding,
    info.totaal_lade,
    info.tegoedbon_crea,
    info.totaal,
    info.amex,
    info.visa,
    info.mastercard,
    info.maestro,
    info.visa_electron,
    info.sodexo,
    info.payfair,
    info.accordenred,
    info.publiciteitsbon_totaal
  );
  return rij;
}

function betaalmiddelen(betaalmiddel_arr) {
  let middelen = {};
  betaalmiddel_arr.forEach(element => {
    const naam = element[0]
      .replace(/\ /g, "_")
      .replace(/\./g, "")
      .toLowerCase();
    const waarde = element[2];
    middelen[naam] = waarde;
  });

  middelen.andere_totaal =
    middelen.cheq_spec +
    middelen.tegoedbon +
    middelen.ecocheques +
    middelen.terugbet_lotto;
  middelen.publiciteitsbon_totaal =
    middelen.bon_pub_dll + middelen.bon_pub_lev + middelen.publiciteitsbon;
  console.log("middelen", middelen);
  return middelen;
}

const kaarten = kaarten_arr => ({
  amex: kaarten_arr[7],
  visa: kaarten_arr[14],
  mastercard: kaarten_arr[23],
  maestro: kaarten_arr[32],
  visa_electron: kaarten_arr[40]
});

const maaltijdcheques = maaltijd_arr => ({
  sodexo: maaltijd_arr[105],
  payfair: maaltijd_arr[79],
  accordenred: maaltijd_arr[130]
});
