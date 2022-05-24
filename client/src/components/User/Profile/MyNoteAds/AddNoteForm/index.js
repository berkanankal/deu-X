import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../../../../../redux/citiesSlice";
import { addNote } from "../../../../../redux/notesSlice";
import { useNavigate } from "react-router-dom";

const AddNoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const { cities } = useSelector((state) => state.cities);
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    user: user.id,
    name: "",
    price: "",
    city: 0,
    university: 0,
    faculty: 0,
    department: 0,
    class: "",
    semester: "",
    note_image: "",
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

  const handlePhoto = (e) => {
    setFormData({
      ...formData,
      note_image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = new FormData();
    newNote.append("user", formData.user);
    newNote.append("name", formData.name);
    newNote.append("price", formData.price);
    newNote.append("city", formData.city);
    newNote.append("university", formData.university);
    newNote.append("faculty", formData.faculty);
    newNote.append("department", formData.department);
    newNote.append("class", formData.class);
    newNote.append("semester", formData.semester);
    newNote.append("note_image", formData.note_image);

    dispatch(addNote(newNote));
    navigate("/profile/mynoteads");
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="name"
            fullWidth
            id="name"
            label="Not İsmi"
            onChange={onChangeOtherInput}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            name="price"
            fullWidth
            label="Fiyat"
            onChange={onChangeOtherInput}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <input
              style={{ width: "97%", margin: "15px 0" }}
              type="file"
              onChange={handlePhoto}
            />
          </div>
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
        <Grid item xs={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Sınıf</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-col-radio-buttons-group-label"
              name="class"
              onChange={onChangeOtherInput}
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Dönem</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-col-radio-buttons-group-label"
              name="semester"
              onChange={onChangeOtherInput}
            >
              <FormControlLabel
                value="guz"
                control={<Radio />}
                label="Güz Dönemi"
              />
              <FormControlLabel
                value="bahar"
                control={<Radio />}
                label="Bahar Dönemi"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        İlan ver
      </Button>
    </Box>
  );
};

export default AddNoteForm;
