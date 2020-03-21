import { KasBoekRow } from "../models/KasBoekRij";

export default async function(file) {
  const kasboekrij = new KasBoekRow(file);
  return kasboekrij.allInfo;
}
