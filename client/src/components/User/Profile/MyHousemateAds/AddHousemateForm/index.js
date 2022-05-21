import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../../../../../redux/citiesSlice";
import { addHousemate } from "../../../../../redux/housematesSlice";
import { useNavigate } from "react-router-dom";

const AddHousemateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cities } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    city: 0,
    university: 0,
    faculty: 0,
    department: 0,
    typeOfHousemate: "",
  });

  const onChangeOtherInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelectInput = (e) => {
    if (e.target.name === "city") {
      setFormData({
        ...formData,
        city: e.target.value,
        university: 0,
        faculty: 0,
        department: 0,
      });
    }
    if (e.target.name === "university") {
      setFormData({
        ...formData,
        university: e.target.value,
        faculty: 0,
        department: 0,
      });
    }
    if (e.target.name === "faculty") {
      setFormData({
        ...formData,
        faculty: e.target.value,
        department: 0,
      });
    }
    if (e.target.name === "department") {
      setFormData({
        ...formData,
        department: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHousemate(formData));
    navigate("/profile/myhousemateads");
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="typeOfHousemate"
              onChange={onChangeOtherInput}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Kalacak ev arıyorum"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Evime arkadaş arıyorum"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Şehir</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Şehir"
              name="city"
              onChange={onChangeSelectInput}
              value={formData.city}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city._id} value={city._id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth disabled={formData.city === 0}>
            <InputLabel id="demo-simple-select-label">Üniversite</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Üniversite"
              name="university"
              onChange={onChangeSelectInput}
              value={formData.university}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map(
                  (university) =>
                    university.city === formData.city && (
                      <MenuItem key={university._id} value={university._id}>
                        {university.name}
                      </MenuItem>
                    )
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            disabled={formData.university === 0 || formData.city === 0}
          >
            <InputLabel id="demo-simple-select-label">Fakülte</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Fakülte"
              name="faculty"
              onChange={onChangeSelectInput}
              value={formData.faculty}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map(
                    (faculty) =>
                      faculty.university === formData.university && (
                        <MenuItem key={faculty._id} value={faculty._id}>
                          {faculty.name}
                        </MenuItem>
                      )
                  )
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            disabled={
              formData.university === 0 ||
              formData.city === 0 ||
              formData.faculty === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bölüm"
              name="department"
              onChange={onChangeSelectInput}
              value={formData.department}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map((faculty) =>
                    faculty.departments.map(
                      (department) =>
                        department.faculty === formData.faculty && (
                          <MenuItem key={department._id} value={department._id}>
                            {department.name}
                          </MenuItem>
                        )
                    )
                  )
                )
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        İlan ver
      </Button>
    </Box>
  );
};

export default AddHousemateForm;
