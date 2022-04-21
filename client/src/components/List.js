import * as React from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const BasicList = () => {
  const classes = useStyles();

  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List className={classes.list}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>

          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Start"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </ListItem>
          {/* <ListItem>
            <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-bluetooth"
              primary="Bluetooth"
            />
            <Switch
              edge="end"
              inputProps={{
                "aria-labelledby": "switch-list-label-bluetooth",
              }}
            />
          </ListItem> */}
          <ListItem>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default BasicList;
