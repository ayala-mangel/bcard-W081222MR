import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardInterface from "../../interfaces/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

type Props = {
  card: CardInterface;
  onDelete: (x: string) => void;
};

const Card: React.FC<Props> = ({ card, onDelete }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar onDelete={onDelete} cardId={card._id} />
    </MuiCard>
  );
};

export default Card;
