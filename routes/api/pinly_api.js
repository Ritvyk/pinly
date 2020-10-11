const express = require("express");
const utils = require("../../Utils/utils");
const Pinly = require("../../models/Url");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Thanks for choosing pinly",
  });
});

//hostname/pinlyapi/create --> create new short url
router.post("/create", async (req, res) => {
  const UID = utils.randomURLId();
  const newURL = new Pinly({
    originalURL: req.body.originalURL,
    pinlyURL: `${req.protocol}://${req.hostname}/${UID}`,
    UID: UID,
  });

  try {
    const response = await newURL.save();
    res.json(response);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
