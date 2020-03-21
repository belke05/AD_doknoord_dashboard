import { KasBoekRow } from "../models/KasBoekRij";

export default async function(file) {
  console.log(file, "original sheet");
  const datum = file[0][0];
  const rijenVerkoop = file.slice(2, 28);
  const rij = file[28];
  const JSON_verkoop = verkoopToJson(rijenVerkoop);
  let JSON_kaarten = {
    amex: rij[7],
    visa: rij[15],
    mastercard: rij[23],
    maestro: rij[32],
    visa_electron: rij[40]
  };
  let JSON_maaltijd = {
    sodexo: rij[105],
    payfair: rij[79],
    accordenred: rij[130]
  };
  const publiciteitsbon_totaal =
    JSON_verkoop.bon_pub_dll +
    JSON_verkoop.bon_pub_lev +
    JSON_verkoop.publiciteitsbon;
  const andere_totaal =
    JSON_verkoop.cheq_spec +
    JSON_verkoop.tegoedbon +
    JSON_verkoop.ecocheques +
    JSON_verkoop.terugbet_lotto +
    JSON_verkoop.maaltijdcheque;
  const som_totaal = totaalSom(
    JSON_verkoop,
    JSON_kaarten,
    JSON_maaltijd,
    publiciteitsbon_totaal,
    andere_totaal
  );
  const verschil =
    JSON_verkoop.totaal -
    JSON_verkoop.afronding -
    (JSON_verkoop.cash + som_totaal);
  let info = {
    datum,
    ...JSON_verkoop,
    ...JSON_kaarten,
    ...JSON_maaltijd,
    andere_totaal,
    publiciteitsbon_totaal,
    som_totaal,
    verschil
  };
  console.log("info", info);
  const kasboekrij = new KasBoekRow(
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
    info.publiciteitsbon_totaal,
    info.som_totaal,
    info.verschil
  );
  console.log("rij", kasboekrij.allInfo);
  return kasboekrij.allInfo;
}

function verkoopToJson(rijen) {
  let verkoopJson = {};
  rijen.forEach(rij => {
    const waarde = rij[2];
    const naam = rij[0]
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/\./g, "");
    verkoopJson[naam] = waarde;
  });
  return verkoopJson;
}

function totaalSom(
  JSON_verkoop,
  JSON_kaarten,
  JSON_maaltijd,
  publiciteitsbon_totaal,
  andere_totaal
) {
  return (
    JSON_verkoop.cheque_delhaize +
    JSON_verkoop.tegoedbon +
    publiciteitsbon_totaal +
    JSON_verkoop.leeggoedbon +
    JSON_verkoop.bancontact +
    JSON_verkoop.op_krediet +
    andere_totaal +
    JSON_kaarten.amex +
    JSON_kaarten.visa +
    JSON_kaarten.mastercard +
    JSON_kaarten.maestro +
    JSON_kaarten.visa_electron +
    JSON_maaltijd.payfair +
    JSON_maaltijd.sodexo +
    JSON_maaltijd.accordenred
  );
}
