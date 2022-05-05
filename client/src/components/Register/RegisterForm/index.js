import React from "react";
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
  password: yup
    .string()
    .min(6, "Parola en az 6 karakter olmalı")
    .required("Zorunlu alan"),
  confirmPassword: yup
    .string()
    .required("Zorunlu alan")
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor"),
});

const RegisterForm = () => {
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

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values) => {
        axios
          .post("http://localhost:5000/api/auth/register", values)
          .then(() => {
            navigate("/login");
            toast.success("Kayıt Başarılı!", toastSettings);
          })
          .catch((err) => {
            toast.error("Bu email adresi zaten kayıtlı!", toastSettings);
          });
      },
    }
  );

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
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
              autoComplete="email"
              helperText={errors.email && touched.email && errors.email}
              error={errors.email && touched.email ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Parola"
              type="password"
              id="password"
              autoComplete="new-password"
              helperText={
                errors.password && touched.password && errors.password
              }
              error={errors.password && touched.password ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Parola Tekrar"
              type="password"
              id="confirmPassword"
              autoComplete="deneme"
              helperText={
                errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword
              }
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Kayıt ol
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">Zaten hesabınız var mı? Giriş yapın</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RegisterForm;
