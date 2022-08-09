import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import img1 from "../Assets/img1.jpg";
import { useTheme } from "@emotion/react";
import PlayControls from "./PlayControls";

function CardComp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const height = !isMobile ? "400px" : "300px";
  const width = !isMobile ? "400px" : "300px";

  console.log(theme);
  return (
    <div>
      <Card sx={{ maxWidth: width, borderRadius: "20px" }}>
        <CardActionArea>
          <CardMedia component="img" height={height} image={img1} />
        </CardActionArea>
      </Card>
      <PlayControls />
    </div>
  );
}

export default CardComp;
