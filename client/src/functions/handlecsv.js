import { KasBoekRow } from "../models/KasBoekRij";

export default function(file) {
  const kasboekrij = new KasBoekRow(file);
  return kasboekrij.allInfo;
}
