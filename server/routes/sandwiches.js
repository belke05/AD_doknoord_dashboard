const express = require("express");
const router = express.Router();
const { get_sandwiches, delete_sandwich } = require("../database/sandwiches");

// GET ALL ORDERS

router.get("*", (req, res, next) => {
  get_sandwiches()
    .then(bestellingen => {
      console.log(bestellingen, "here");
      res.json({ bestellingen });
    })
    .catch(err => {
      console.error(err);
    });
});

router.delete("/:id", (req, res, next) => {
  const orderIds = req.params.id;
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

router.patch("/:id", (req, res, next) => {
  const orderIds = req.params.id;
  const orderIdsArr = JSON.parse(orderIds).orderIds;
  console.log(orderIdsArr);
  delete_sandwich(orderIdsArr)
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
