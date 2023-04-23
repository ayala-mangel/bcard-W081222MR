import React from "react";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";

const CardActionBar = () => {
  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton aria-label="delete card">
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label="edit card">
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>
        <IconButton aria-label="add to fav">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
