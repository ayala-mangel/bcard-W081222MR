import { useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import { getCard, getCards } from "../services/cardApi";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";

type ErrorType = null | string;
type CardsType = null | CardInterface[];
type CardType = null | CardInterface;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardType>(null);

  useAxiosInterceptors();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards, null);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  };

  return { isLoading, error, cards, card, handleGetCards, handleGetCard };
};

export default useCards;
