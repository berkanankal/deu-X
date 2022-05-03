import { useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/authSlice";

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Zorunlu alan")
    .email("Lütfen geçerli bir mail adresi giriniz"),
  password: yup.string().required("Zorunlu alan"),
});

const toastSettings = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        axios
          .post("http://localhost:5000/api/auth/login", values)
          .then((res) => {
            if (res.data.success) {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              toast.success("Giriş başarılı!", toastSettings);
              dispatch(setUser());
              navigate("/");
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              toast.error("Email veya parola yanlış!", toastSettings);
            }
          });
      },
    }
  );

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Adresi"
        name="email"
        autoComplete="email"
        onChange={handleChange}
        helperText={errors.email && touched.email && errors.email}
        error={errors.email && touched.email ? true : false}
        onBlur={handleBlur}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Parola"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleChange}
        helperText={errors.password && touched.password && errors.password}
        error={errors.password && touched.password ? true : false}
        onBlur={handleBlur}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Beni hatırla"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Giriş Yap
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Parolanızı mı unuttunuz?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Hesabınız yok mu? Kayıt olun
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
