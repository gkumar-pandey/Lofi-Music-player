import React, { useRef } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import img1 from "../Assets/img1.jpg";
import { useTheme } from "@emotion/react";
import PlayControls from "./PlayControls";

function CardComp({ currPlayingSong }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(currPlayingSong));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const height = !isMobile ? "400px" : "300px";
  const width = !isMobile ? "400px" : "300px";
  const playSong = () => {
    audioRef.current.play();
  };
  const pauseSong = () => {
    audioRef.current.pause();
  };
  const clickHandler = () => {
    setIsPlaying(!isPlaying);
     

    if (isPlaying) {
      playSong(currPlayingSong);
    } else {
      pauseSong(currPlayingSong);
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: width, borderRadius: "20px" }}>
        <CardActionArea>
          <CardMedia component="img" height={height} image={img1} />
        </CardActionArea>
      </Card>
      <div style={coustemStyle.musicText}>
        <h3>Kya Mujhe Slowed & Reverb</h3>
        <p>Slowed Kya mujhe pyaar by KK</p>
      </div>
      <PlayControls isPlaying={isPlaying} clickHandler={clickHandler} />
    </div>
  );
}

const coustemStyle = {
  musicText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
  },
};

export default CardComp;
