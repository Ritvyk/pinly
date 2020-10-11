const express = require("express");
const Pinly = require("../../models/Url");
const router = express.Router();

//test id --> c8ba6991

// protcol :// hostname / UID
router.get("/:UID", async (req, res) => {
  try {
    const response = await Pinly.find({ UID: req.params.UID });
    if (response.length > 0) {
      return res.redirect(response[0].originalURL);
    } else {
      res.send("Whoops! Broken URL");
    }
  } catch (err) {
    res.send("Whoops! Broken URL");
  }
});

module.exports = router;
