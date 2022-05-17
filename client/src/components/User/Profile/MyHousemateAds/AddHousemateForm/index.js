import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

const AddHousemateForm = () => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            label="Ad"
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
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Bilgileri Güncelle
      </Button>
    </Box>
  );
};

export default AddHousemateForm;
