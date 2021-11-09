import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Register() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    state: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", info?.name);
    localStorage.setItem("phone", info?.phone);
    localStorage.setItem("age", info?.age);
    localStorage.setItem("gender", info?.gender);
    localStorage.setItem("country", info?.country);
    localStorage.setItem("state", info?.state);
    console.log(info);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Register Form
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={onSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="current-name"
              value={info.name}
              onChange={handleInput}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="number"
              id="phone"
              autoComplete="current-phone"
              value={info.phone}
              onChange={handleInput}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              name="age"
              label="Age"
              type="number"
              id="age"
              autoComplete="current-age"
              value={info.age}
              onChange={handleInput}
            />
            <FormControl sx={{ m: 2, Width: 120 }}>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Select
                native
                defaultValue=""
                id="gender"
                name="gender"
                label="Gender"
                // value={info.gender}
                onChange={handleInput}
              >
                <option aria-label="None" value="" />
                <option value={"Male"}>Male</option>
                <option value={"FeMale"}>FeMale</option>
                <option value={"Other"}>Other</option>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 1, Width: "50ch" }}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                native
                required
                fullWidth
                defaultValue=""
                id="country"
                name="country"
                label="Country"
                value={info.country}
                onChange={handleInput}
              >
                <option aria-label="None" value="" />
                <option value={"India"}>India</option>
                <option value={"Maharastra"}>Maharastra</option>
                <option value={"Rajasthan"}>Rajasthan</option>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 3, Width: "50ch" }}>
              <InputLabel htmlFor="state">State</InputLabel>
              <Select
                native
                required
                fullWidth
                defaultValue=""
                id="state"
                name="state"
                label="State"
                value={info.state}
                onChange={handleInput}
              >
                <option aria-label="None" value="" />
                <option value={"Gujarat"}>Gujarat</option>
                <option value={"Mumbai"}>Mumbai</option>
                <option value={"Udaipur"}>Udaipur</option>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
