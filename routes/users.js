const router = require("express").Router();
const User = require("../models/User");

//UPDATE
router.post("/:id", async (req, res) => {
  if (req.body.userId)
    try {
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
module.exports = router;
