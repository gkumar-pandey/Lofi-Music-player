import React from "react";
import { useState } from "react";
import {
  Drawer,
  ListItemText,
  IconButton,
  Icon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { List, ListItem } from "@mui/material";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

import data from "../Assets/Data/Data";

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerWidth = isMobile ? "80%" : "30%";
  return (
    <div>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "500px" }}
        PaperProps={{ sx: { width: drawerWidth, backgroundColor: "black" } }}
      >
        <List>
          {data.map((item, idx) => {
            return (
              <ListItem>
                <ListItemText>
                  <div style={coustemStyle.container}>
                    <img style={coustemStyle.img} src={item.img} />
                    <div>
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <QueueMusicIcon sx={{ fontSize: "2.2rem" }} />
      </IconButton>
    </div>
  );
}

const coustemStyle = {
  container: {
    // border: "1px solid red",
    height: "80px",
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "80px",
    width: "80px",
  },
};

export default DrawerComp;
