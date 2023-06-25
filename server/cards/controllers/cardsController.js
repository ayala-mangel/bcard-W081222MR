const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const Card = require("../models/mongoose/Card");

const getCards = (req, res) => {
  res.send({ message: "in getCards" });
};

const getCard = (req, res) => {
  res.send({ message: "in getCard" });
};

const createCard = async (req, res) => {
  try {
    const card = req.body;

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedCard = normalizeCard(card, "6498347f0d9b4b15641f5228");

    const cardToDB = new Card(normalizedCard);
    const cardFromDB = await cardToDB.save();
    res.send(cardFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
