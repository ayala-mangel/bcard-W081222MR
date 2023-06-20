const express = require("express");
const { getCards, getCard } = require("../controllers/cardsController");
const router = express.Router();

router.get("/", getCards);
router.get("/:cardId", getCard);

module.exports = router;
