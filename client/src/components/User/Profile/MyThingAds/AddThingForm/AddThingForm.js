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
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../../../../../redux/citiesSlice";
import { fetchThingCategories } from "../../../../../redux/thingCategoriesSlice";
import { addThing } from "../../../../../redux/thingsSlice";
import { useNavigate } from "react-router-dom";

const AddThingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cities } = useSelector((state) => state.cities);
  const { thingCategories } = useSelector((state) => state.thingCategories);
  const user = useSelector((state) => state.auth.user);

  const [newThing, setNewThing] = useState({
    user: user.id,
    name: "",
    description: "",
    price: "",
    city: 0,
    university: 0,
    faculty: 0,
    department: 0,
    category: 0,
    thing_image: "",
  });

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchThingCategories());
  }, [dispatch]);

  const onChangeOtherInput = (e) => {
    setNewThing({
      ...newThing,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelectInput = (e) => {
    if (e.target.name === "city") {
      setNewThing({
        ...newThing,
        city: e.target.value,
        university: 0,
        faculty: 0,
        department: 0,
      });
    }
    if (e.target.name === "university") {
      setNewThing({
        ...newThing,
        university: e.target.value,
        faculty: 0,
        department: 0,
      });
    }
    if (e.target.name === "faculty") {
      setNewThing({
        ...newThing,
        faculty: e.target.value,
        department: 0,
      });
    }
    if (e.target.name === "department") {
      setNewThing({
        ...newThing,
        department: e.target.value,
      });
    }
  };

  const handlePhoto = (e) => {
    setNewThing({
      ...newThing,
      thing_image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", newThing.user);
    formData.append("name", newThing.name);
    formData.append("description", newThing.description);
    formData.append("price", newThing.price);
    formData.append("city", newThing.city);
    formData.append("university", newThing.university);
    formData.append("faculty", newThing.faculty);
    formData.append("department", newThing.department);
    formData.append("category", newThing.category);
    formData.append("thing_image", newThing.thing_image);

    dispatch(addThing(formData));
    navigate("/profile/mythingads");
  };

  return (
    <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="name"
            fullWidth
            id="name"
            label="Eşya İsmi"
            onChange={onChangeOtherInput}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Kategori"
              name="category"
              value={newThing.category}
              onChange={onChangeOtherInput}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {thingCategories.map((thingCategory) => (
                <MenuItem value={thingCategory._id} key={thingCategory._id}>
                  {thingCategory.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Açıklama"
            name="description"
            multiline
            fullWidth
            maxRows={4}
            onChange={onChangeOtherInput}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            name="price"
            fullWidth
            label="Fiyat"
            onChange={onChangeOtherInput}
          />
        </Grid>
        <Grid item xs={4}>
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
              value={newThing.city}
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
          <FormControl fullWidth disabled={newThing.city === 0}>
            <InputLabel id="demo-simple-select-label">Üniversite</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Üniversite"
              name="university"
              onChange={onChangeSelectInput}
              value={newThing.university}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map(
                  (university) =>
                    university.city === newThing.city && (
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
            disabled={newThing.university === 0 || newThing.city === 0}
          >
            <InputLabel id="demo-simple-select-label">Fakülte</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Fakülte"
              name="faculty"
              onChange={onChangeSelectInput}
              value={newThing.faculty}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map(
                    (faculty) =>
                      faculty.university === newThing.university && (
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
              newThing.university === 0 ||
              newThing.city === 0 ||
              newThing.faculty === 0
            }
          >
            <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bölüm"
              name="department"
              onChange={onChangeSelectInput}
              value={newThing.department}
            >
              <MenuItem value={0} disabled>
                Seçiniz
              </MenuItem>
              {cities.map((city) =>
                city.universities.map((university) =>
                  university.faculties.map((faculty) =>
                    faculty.departments.map(
                      (department) =>
                        department.faculty === newThing.faculty && (
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

export default AddThingForm;
