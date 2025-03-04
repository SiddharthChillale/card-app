import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  FormControl,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import styles from "./Card.module.scss";

const CardTwo = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscription confirmed for: ${email}`);
    setEmail("");
  };

  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.cardHeader}
        title="React JS Essentials"
        avatar={<CodeIcon className={styles.icon} />}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="body1" className={styles.description}>
          Components, state, props and everything you need to become proficient
          with React. Build dynamic user interfaces with the most popular
          JavaScript library.
        </Typography>

        <form onSubmit={handleSubmit} className={styles.form}>
          <FormControl fullWidth className={styles.formControl}>
            <TextField
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              required
              className={styles.input}
            />
          </FormControl>
        </form>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Start Learning
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTwo;
