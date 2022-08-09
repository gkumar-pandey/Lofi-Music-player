import React from "react";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Box } from "@mui/material";

function PlayControls({ clickHandler, isPlaying }) {
  // console.log(isPlaying);
  return (
    <Box
      sx={{
        // border: "1px solid red",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <FastRewindIcon sx={{ fontSize: "5rem" }} />
      {isPlaying ? (
        <PlayCircleOutlineIcon
          sx={{ fontSize: "5rem" }}
          onClick={clickHandler}
        />
      ) : (
        <PauseCircleOutlineIcon
          sx={{ fontSize: "5rem" }}
          onClick={clickHandler}
        />
      )}
      <FastForwardIcon sx={{ fontSize: "5rem" }} />
    </Box>
  );
}

export default PlayControls;
