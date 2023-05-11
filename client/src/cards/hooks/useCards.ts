import { useState } from "react";
import CardInterface from "../interfaces/CardInterface";
import { getCards } from "../services/cardApi";

type ErrorType = null | string;
type CardsType = null | CardInterface[];

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [cards, setCards] = useState<CardsType>(null);

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  return { isLoading, error, cards, handleGetCards };
};

export default useCards;
