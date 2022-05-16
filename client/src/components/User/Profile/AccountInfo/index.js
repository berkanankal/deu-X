import { useEffect, useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

let registerSchema = yup.object().shape({
  name: yup.string().required("Zorunlu alan"),
  surname: yup.string().required("Zorunlu alan"),
  email: yup
    .string()
    .required("Zorunlu alan")
    .email("Lütfen geçerli bir mail adresi giriniz"),
});

const AccountInfo = () => {
  const navigate = useNavigate();

  const toastSettings = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: JSON.parse(localStorage.getItem("user")),
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              value={values.name}
              required
              fullWidth
              id="name"
              label="Ad"
              helperText={errors.name && touched.name && errors.name}
              error={errors.name && touched.name ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="surname"
              label="Soyad"
              name="surname"
              value={values.surname}
              autoComplete="family-name"
              helperText={errors.surname && touched.surname && errors.surname}
              error={errors.surname && touched.surname ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Adresi"
              name="email"
              value={values.email}
              autoComplete="email"
              helperText={errors.email && touched.email && errors.email}
              error={errors.email && touched.email ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Bilgileri Güncelle
        </Button>
      </Box>
    </>
  );
};

export default AccountInfo;
