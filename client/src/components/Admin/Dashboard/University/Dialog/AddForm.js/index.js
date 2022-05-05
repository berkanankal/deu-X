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

  const [formData, setFormData] = useState({
    selectedCity: "",
    selectedDistrict: "",
  });

  console.log(formData);

  const onChangeSelectInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            name="selectedCity"
            value={formData.selectedCity}
            onChange={onChangeSelectInput}
          >
            <MenuItem>Tüm şehirler</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          disabled={formData.selectedCity === ""}
          sx={{ mb: 3 }}
        >
          <InputLabel id="demo-simple-select-label">Bölge</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bölüm"
            name="selectedDistrict"
            value={formData.selectedDistrict}
            onChange={onChangeSelectInput}
          >
            {cities.map(
              (city) =>
                city.id === formData.selectedCity &&
                city.districts.map((district) => (
                  <MenuItem key={district.id} value={district.id}>
                    {district.name}
                  </MenuItem>
                ))
            )}
          </Select>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default AddForm;
