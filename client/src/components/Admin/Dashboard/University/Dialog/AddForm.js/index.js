import { useState } from "react";
import {
  Box,
  TextField,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const AddForm = () => {
  const { cities } = useSelector((state) => state.cities);

  const [selectedCity, setSelectedCity] = useState(null);

  console.log(selectedCity);

  return (
    <Box component="form">
      <FormGroup>
        <FormControl sx={{ mb: 3 }}>
          <TextField label="Üniversite İsmi" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="demo-simple-select-label">Şehir</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Bölüm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth disabled sx={{ mb: 3 }}>
          <InputLabel id="demo-simple-select-label">Bölge</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bölüm"
            value={1}
          >
            <MenuItem value={1}>Buca</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default AddForm;
