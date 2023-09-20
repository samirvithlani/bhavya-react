import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { ButtonComp } from "../ButtonComp";

export const BoxDemo = () => {
  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 300,
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
      <Button variant="text" color="primary" size="small">
        CLICK ME
      </Button>
      <Button variant="contained" color="success" size="medium">
        CLICK ME
      </Button>
      <Button variant="outlined" color="warning" size="large">
        CLICK ME
      </Button>
      <Button startIcon={<SendIcon />} variant="outlined">
        SEND
      </Button>
      <Button endIcon={<DeleteForeverIcon />} variant="outlined">
        DELETE
      </Button>
      <IconButton>
        <FingerprintIcon />
      </IconButton>
      <ButtonComp name ="add">
      </ButtonComp>
      <ButtonComp name ="add">
      </ButtonComp>
    </div>
  );
};
