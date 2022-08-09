import React from "react";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Box } from "@mui/material";

function PlayControls() {
  return (
    <Box sx={{border: '1px solid red', display:'flex' ,justifyContent: 'space-evenly'}}>
      <FastRewindIcon sx={{ fontSize: "5rem" }} />
      <PlayCircleOutlineIcon sx={{ fontSize: "5rem" }} />
      <FastForwardIcon sx={{ fontSize: "5rem" }} />
    </Box>
  );
}

export default PlayControls;
