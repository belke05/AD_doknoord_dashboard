export const KasBoekRow = class {
  constructor(
    datum,
    cash,
    cheq_spec,
    maaltijdcheque,
    cheque_delhaize,
    tegoedbon,
    bon_pub_dll,
    bon_pub_lev,
    publiciteitsbon,
    leeggoedbon,
    ecocheques,
    mobile,
    online_betaling,
    bancontact,
    elec_maaltcheq,
    terugbet_lotto,
    kredietkaart,
    op_krediet,
    andere_totaal,
    andere,
    promo,
    kadobon,
    elec_ecocheques,
    elec_cadeau,
    afronding,
    totaal_lade,
    tegoedbon_crea,
    totaal,
    amex,
    visa,
    mastercard,
    maestro,
    visa_electron,
    sodexo,
    payfair,
    accordenred,
    publiciteitsbon_totaal,
    som_totaal,
    verschil
  ) {
    this.datum = datum;
    this.cash = cash;
    this.cheq_spec = cheq_spec;
    this.maaltijdcheque = maaltijdcheque;
    this.cheque_delhaize = cheque_delhaize;
    this.tegoedbon = tegoedbon;
    this.bon_pub_dll = bon_pub_dll;
    this.bon_pub_lev = bon_pub_lev;
    this.publiciteitsbon = publiciteitsbon;
    this.leeggoedbon = leeggoedbon;
    this.ecocheques = ecocheques;
    this.mobile = mobile;
    this.online_betaling = online_betaling;
    this.bancontact = bancontact;
    this.elec_maaltcheq = elec_maaltcheq;
    this.terugbet_lotto = terugbet_lotto;
    this.kredietkaart = kredietkaart;
    this.op_krediet = op_krediet;
    this.andere_totaal = andere_totaal;
    this.andere = andere;
    this.promo = promo;
    this.kadobon = kadobon;
    this.elec_ecocheques = elec_ecocheques;
    this.elec_cadeau = elec_cadeau;
    this.afronding = afronding;
    this.totaal_lade = totaal_lade;
    this.tegoedbon_crea = tegoedbon_crea;
    this.totaal = totaal;
    this.amex = amex;
    this.visa = visa;
    this.mastercard = mastercard;
    this.maestro = maestro;
    this.visa_electron = visa_electron;
    this.sodexo = sodexo;
    this.payfair = payfair;
    this.accordenred = accordenred;
    this.publiciteitsbon_totaal = publiciteitsbon_totaal;
    this.som_totaal = som_totaal;
    this.verschil = verschil;
  }

  get allInfo() {
    return {
      datum: this.datum,
      cash: this.cash,
      cheq_spec: this.cheq_spec,
      maaltijdcheque: this.maaltijdcheque,
      cheque_delhaize: this.cheque_delhaize,
      tegoebon: this.tegoedbon,
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
