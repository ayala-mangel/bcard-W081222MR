import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardInterface from "../../interfaces/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const Card = () => {
  const card: CardInterface = {
    _id: "abcd1",
    title: "Card Title",
    subtitle: "Card Subtitle",
    description: "the card description",
    phone: "050-000000",
    image: {
      url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
      alt: "test",
    },
    web: "",
    address: {
      state: "",
      country: "israel",
      city: "tel-aviv",
      street: "nahson",
      houseNumber: 5,
      zip: 1234,
    },
    bizNumber: 1000000,
    email: "test@gmail.com",
    likes: [],
    user_id: "123456789",
    createdAt: new Date(),
  };

  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar />
    </MuiCard>
  );
};

export default Card;
