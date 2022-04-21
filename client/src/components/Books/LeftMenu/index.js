import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ListSubheader,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const useStyles = makeStyles({
  list: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },
});

const LeftMenu = () => {
  const classes = useStyles();

  const [university, setUniversity] = useState("");

  return (
    <Box>
      <List className={classes.list}>
        <ListItem>
          <TextField
            fullWidth
            id="standard-bare"
            variant="outlined"
            placeholder="Aranacak kelime"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlinedIcon></SearchOutlinedIcon>
                </IconButton>
              ),
            }}
          />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.list}>
        <ListItem>
          <FormControl fullWidth disabled>
            <InputLabel id="demo-simple-select-label">Üniversite</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Üniversite"
              value={1}
            >
              <MenuItem value={1}>Dokuz Eylül Üniversitesi</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl fullWidth disabled>
            <InputLabel id="demo-simple-select-label">Fakülte</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Fakülte"
              value={1}
            >
              <MenuItem value={1}>
                İktisadi ve İdari Bilimler Fakültesi
              </MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl fullWidth disabled>
            <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bölüm"
              value={1}
            >
              <MenuItem value={1}>Yönetim Bilişim Sistemleri</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        className={classes.list}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Sınıf
          </ListSubheader>
        }
      >
        <ListItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="1. Sınıf"
            />
            <FormControlLabel control={<Checkbox />} label="2. Sınıf" />
            <FormControlLabel control={<Checkbox />} label="3. Sınıf" />
            <FormControlLabel control={<Checkbox />} label="4. Sınıf" />
          </FormGroup>
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        className={classes.list}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dönem
          </ListSubheader>
        }
      >
        <ListItem>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Güz Dönemi"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Bahar Dönemi"
            />
          </FormGroup>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftMenu;
