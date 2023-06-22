const express = require("express");
const {
  getCards,
  getCard,
  createCard,
} = require("../controllers/cardsController");
const router = express.Router();

router.get("/", getCards);
router.get("/:cardId", getCard);
router.post("/", createCard);

module.exports = router;
