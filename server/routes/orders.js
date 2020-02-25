const express = require("express");
const router = express.Router();
const { get_orders, delete_order } = require("../database/orders");

// GET ALL ORDERS

router.get("*", (req, res, next) => {
  get_orders()
    .then(bestellingen => {
      res.json({ bestellingen });
    })
    .catch(err => {
      console.error(err);
    });
});

router.delete("/:orderIds", (req, res, next) => {
  const orderIds = req.params.orderIds;
  const orderIdsArr = JSON.parse(orderIds).orderIds;
  console.log(orderIdsArr);
  delete_order(orderIdsArr)
    .then(() => {
      console.log("succesful deletion");
      res.status(200).json({
        message: "succesfully deleted orders",
        orders: orderIdsArr
      });
    })
    .catch(err => {
      console.error(err, "error during delete");
      res.status(500);
    });
});

module.exports = router;
