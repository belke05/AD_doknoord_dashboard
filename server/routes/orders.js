const express = require("express");
const router = express.Router();
const { get_orders } = require("../database/orders");

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

module.exports = router;
