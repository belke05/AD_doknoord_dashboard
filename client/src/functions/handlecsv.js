import readXlsxFile from "read-excel-file";
import { KasBoekRow } from "../models/KasBoekRij";

export default async function(file) {
  const rows = await readXlsxFile(file);
  const middelen = rows.slice(2, 28);
  const andere = rows[28];
  console.log(rows, "rows");
  let info = {
    datum: rows[0][0].replace("Selectie: ", ""),
    ...betaalmiddelen(middelen),
    ...kaarten(andere),
    ...maaltijdcheques(andere)
  };
  const rij = new KasBoekRow(...Object.values(info));
  console.log(rij);
  return info;
}

function betaalmiddelen(betaalmiddel_arr) {
  let middelen = {};
  betaalmiddel_arr.forEach(element => {
    const naam = element[0].replace(/\ /g, "_").replace(/\./g, "");
    const waarde = element[2];
    middelen[naam] = waarde;
  });

  middelen.andere =
    middelen.CHEQ_SPEC +
    middelen.TEGOEDBON +
    middelen.ECOCHEQUES +
    middelen.TERUGBET_LOTTO;
  middelen.publiciteitsbon =
    middelen.BON_PUB_DLL + middelen.BON_PUB_LEV + middelen.PUBLICITEITSBON;
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
