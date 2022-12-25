import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../redux/authSlice";

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Zorunlu alan")
    .email("Lütfen geçerli bir mail adresi giriniz"),
  password: yup.string().required("Zorunlu alan"),
});

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
        dispatch(login(values));
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1 }}
      >
        Giriş Yap
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to="/">Parolanızı mı unuttunuz?</Link>
        </Grid>
        <Grid item>
          <Link to="/register">Hesabınız yok mu? Kayıt olun</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
