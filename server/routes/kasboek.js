const express = require("express");
const router = express.Router();
const { get_kasboek } = require("../database/kasboek");

// GET ALL ORDERS

router.get("*", (req, res, next) => {
  console.log("on route");
  get_kasboek()
    .then(kasboek => {
      console.log("in route", kasboek);
      res.json({ kasboek });
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
