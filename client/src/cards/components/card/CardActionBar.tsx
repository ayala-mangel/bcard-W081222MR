import React, { useState } from "react";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import CardInterface from "../../interfaces/CardInterface";
import { useUser } from "../../../users/providers/UserProvider";
import useCards from "../../hooks/useCards";

type Props = {
  onDelete: (x: string) => void;
  card: CardInterface;
};

const CardActionBar: React.FC<Props> = ({ onDelete, card }) => {
  const { _id, likes, user_id } = card;
  const { user } = useUser();
  const { handleLikeCard } = useCards();

  const [isLiked, setLike] = useState(() => {
    if (!user) return false;
    return !!likes.find(userId => userId === user._id);
  });

  const handleEditCard = () => null;
  // console.log(`you moved to edit card no: ${cardId}`);

  const handleLike = async () => {
    setLike(prev => !prev);
    await handleLikeCard(_id);
  };

  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        {/* <IconButton onClick={() => onDelete(cardId)} aria-label="delete card">
          <DeleteIcon />
        </IconButton> */}

        <IconButton onClick={handleEditCard} aria-label="edit card">
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>
        <IconButton aria-label="add to fav" onClick={handleLike}>
          <FavoriteIcon color={isLiked ? "error" : "inherit"} />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
