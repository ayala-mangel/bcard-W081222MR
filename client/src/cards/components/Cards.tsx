import React from "react";
import Typography from "@mui/material/Typography";
import CardInterface from "./../interfaces/CardInterface";
import Card from "./card/Card";
import Grid from "@mui/material/Grid";

type Props = {};

const Cards: React.FC<Props> = () => {
  let cards: CardInterface[] = [];
  cards = [
    {
      _id: "abcd1",
      title: "One",
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
    },
    {
      _id: "abcd2",
      title: "Two",
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
    },
    {
      _id: "abcd3",
      title: "Three",
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
    },
  ];

  if (!cards.length)
    return (
      <Typography>
        Opss... it seems that there are no business cards to display...
      </Typography>
    );

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
