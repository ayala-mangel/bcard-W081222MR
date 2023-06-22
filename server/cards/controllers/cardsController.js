const { handleError } = require("../../utils/handleErrors");
const validateCard = require("../models/joi/validateCard");

const getCards = (req, res) => {
  res.send("in getCards!!!");
};

const getCard = (req, res) => {
  res.send("in getCard!!!");
};

const createCard = (req, res) => {
  const card = req.body;

  const { error } = validateCard(card);
  if (error)
    return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

  res.send(card);
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
