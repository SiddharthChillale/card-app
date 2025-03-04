import logo from "./logo.svg";
import { Container, Grid } from "@mui/material";
import CardOne from "./components/CardOne/Card";
import CardTwo from "./components/CardTwo/Card";
import "./App.css";

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} style={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={6}>
          <CardOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTwo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
