import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardInterface from "../../interfaces/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

type Props = {
  card: CardInterface;
};

const Card: React.FC<Props> = ({ card }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar />
    </MuiCard>
  );
};

export default Card;
