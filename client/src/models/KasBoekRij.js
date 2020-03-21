export const KasBoekRow = class {
  constructor(file) {
    this.file = file;
    this.datum = file[0][0];
    this.verkoopJSON = {};
    const rijen = file.slice(2, 28);
    rijen.forEach(rij => {
      const waarde = rij[2];
      const naam = rij[0]
        .toLowerCase()
        .replace(/ /g, "_")
        .replace(/\./g, "");
      this.verkoopJSON[naam] = waarde;
    });
  }

  get andere_totaal() {
    return (
      this.verkoopJSON.cheq_spec +
      this.verkoopJSON.tegoedbon +
      this.verkoopJSON.ecocheques +
      this.verkoopJSON.terugbet_lotto +
      this.verkoopJSON.maaltijdcheque
    );
  }

  get publiciteitsbon_totaal() {
    return (
      this.verkoopJSON.bon_pub_dll +
      this.verkoopJSON.bon_pub_lev +
      this.verkoopJSON.publiciteitsbon
    );
  }

  get som_totaal() {
    return (
      this.verkoopJSON.cheque_delhaize +
      this.verkoopJSON.tegoedbon +
      this.verkoopJSON.leeggoedbon +
      this.verkoopJSON.bancontact +
      this.verkoopJSON.op_krediet +
      this.kaarten.amex +
      this.kaarten.visa +
      this.kaarten.mastercard +
      this.kaarten.maestro +
      this.kaarten.visa_electron +
      this.maaltijd.payfair +
      this.maaltijd.sodexo +
      this.maaltijd.accordenred +
      this.andere_totaal +
      this.publiciteitsbon_totaal
    );
  }

  get kaarten() {
    return {
      amex: this.file[28][7],
      visa: this.file[28][15],
      mastercard: this.file[28][23],
      maestro: this.file[28][32],
      visa_electron: this.file[28][40]
    };
  }

  get maaltijdcheque() {
    return {
      sodexo: rij[105],
      payfair: rij[79],
      accordenred: rij[130]
    };
  }

  get verschil() {
    return (
      this.verkoopJSON.totaal -
      this.verkoopJSON.afronding -
      (this.verkoopJSON + this.som_totaal)
    );
  }

  get allInfo() {
    return {
      datum: this.datum,
      cash: this.cash,
      cheq_spec: this.cheq_spec,
      maaltijdcheque: this.maaltijdcheque,
      cheque_delhaize: this.cheque_delhaize,
      tegoebon: this.verkoopJSON.tegoedbon,
      bon_pub_dll: this.bon_pub_dll,
      bon_pub_lev: this.bon_pub_lev,
      publiciteitsbon: this.publiciteitsbon,
      leeggoedbon: this.leeggoedbon,
      ecocheques: this.ecocheques,
      mobile: this.mobile,
      online_betaling: this.online_betaling,
      bancontact: this.bancontact,
      elec_maaltcheq: this.elec_maaltcheq,
      terugbet_lotto: this.terugbet_lotto,
      kredietkaart: this.kredietkaart,
      op_krediet: this.op_krediet,
      andere_totaal: this.andere_totaal,
      andere: this.andere,
      promo: this.promo,
      kadobon: this.kadobon,
      elec_ecocheques: this.elec_ecocheques,
      elec_cadeau: this.elec_cadeau,
      afronding: this.afronding,
      totaal_lade: this.totaal_lade,
      tegoedbon_crea: this.tegoedbon_crea,
      totaal: this.totaal,
      amex: this.amex,
      visa: this.visa,
      mastercard: this.mastercard,
      maestro: this.maestro,
      visa_electron: this.visa_electron,
      payfair: this.payfair,
      sodexo: this.sodexo,
      accordenred: this.accordenred,
      som_totaal: this.som_totaal,
      verschil: this.verschil
    };
  }

  get tableInfo() {
    return {
      cheque_delhaize: this.cheque_delhaize,
      tegoedbon: this.tegoedbon,
      publiciteitsbon_totaal: this.publiciteitsbon_totaal,
      leeggoedbon: this.leeggoedbon,
      bancontact: this.bancontact,
      op_krediet: this.op_krediet,
      andere_totaal: this.andere_totaal,
      amex: this.amex,
      visa: this.visa,
      mastercard: this.mastercard,
      maestro: this.maestro,
      visa_electron: this.visa_electron,
      payfair: this.payfair,
      sodexo: this.sodexo,
      accordenred: this.accordenred,
      som_totaal: this.som_totaal,
      verschil: this.verschil,
      cash: this.cash
    };
  }
};
