const { db } = require("../config/index");

const get_orders = async () => {
  const snapshot = await db.collection("orders").get();
  let orders = snapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });

  return orders;
};

module.exports = {
  get_orders
};
