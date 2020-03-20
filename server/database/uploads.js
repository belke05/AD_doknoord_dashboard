const { db } = require("../config/index");

const uploadPhoto = async (photoOptie, photoUrl) => {
  const res = await db
    .collection("photos")
    .doc(`${photoOptie}`)
    .set({ url: photoUrl, name: photoOptie });
  return res;
};

const uploadText = async (textOptie, newText) => {
  const res = await db
    .collection("texts")
    .doc(`${textOptie}`)
    .set({ text: newText });
  return res;
};

const uploadKasboekRow = async newRow => {
  db.collection("kasboekRow")
    .add(newRow)
    .then(ref => {
      console.log("Added document with ID: ", ref.id);
      return "Added document with ID: " + ref.id;
    });
};

module.exports = {
  uploadPhoto,
  uploadText,
  uploadKasboekRow
};
