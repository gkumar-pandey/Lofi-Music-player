import React from "react";
import { useState } from "react";
import { Drawer, ListItemText } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { Link } from "@mui/material";
import data from "../Assets/Data/Data";
import { width } from "@mui/system";

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <div>
      <Drawer
        anchor="left"
        open={true}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "500px" }}
        PaperProps={{ sx: { width: "30%", backgroundColor: "black" } }}
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
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

const coustemStyle = {
  container: {
    border: "1px solid red",
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
