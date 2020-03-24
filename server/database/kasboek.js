const { db } = require("../config/index");

const get_kasboek = async () => {
  console.log("here in db");
  const snapshot = await db.collection("kasboek").get();
  let kasboek = snapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
  console.log(kasboek);
  return kasboek;
};

module.exports = {
  get_kasboek
};
