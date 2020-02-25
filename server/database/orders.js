const { db } = require("../config/index");

const get_orders = async () => {
  const snapshot = await db.collection("orders").get();
  let orders = snapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
  return orders;
};

// const delete_order = async orderIds => {
//   let ordersRef = db.collection("orders");
//   console.log("order ids", orderIds);
//   const snapshot = await ordersRef.where("id", "in", orderIds).get();
//   var batch = db.batch();
//   snapshot.docs.map(doc => {
//     console.log(doc.id, "doc id");
//     console.log("doc date", doc.data());
//   });
//   snapshot.forEach(function(doc) {
//     console.log(doc.ref);
//     // For each doc, add a delete operation to the batch
//     batch.delete(doc.ref);
//   });
//   // Commit the batch
//   await batch.commit();

//   return;
//   // return db
//   //   .collection("orders")
//   //   .doc(orderId)
//   //   .delete();
// };

const delete_order = async orderIds => {
  let ordersRef = db.collection("orders");
  for (let i = 0; i < orderIds.length; i++) {
    const id = orderIds[i];
    await ordersRef.doc(id).delete();
  }
  return;
};

module.exports = {
  get_orders,
  delete_order
};
