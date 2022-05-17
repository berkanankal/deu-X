import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupIcon from "@mui/icons-material/Group";
import ChairIcon from "@mui/icons-material/Chair";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const LeftMenu = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className={classes.list}
    >
      <ListItem disablePadding>
        <ListItemButton component={Link} to="">
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Hesap Bilgilerim" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="myhousemateads">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Ev Arkadaşı İlanlarım" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="mythingads">
          <ListItemIcon>
            <ChairIcon />
          </ListItemIcon>
          <ListItemText primary="Eşya İlanlarım" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="mybookads">
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Kitap İlanlarım" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="mynoteads">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Not İlanlarım" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default LeftMenu;
