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
  Grid,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import styles from "./Card.module.scss";

const CardTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Does nothing sorry`);
  };

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="body1" className={styles.description}>
          Speak to one of our experts
        </Typography>

        <form onSubmit={handleSubmit} className={styles.form}>
          <FormControl fullWidth className={styles.formControl}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              placeholder="Fullname"
              className={styles.input}
            />
          </FormControl>
          <FormControl fullWidth className={styles.formControl}>
            <TextField
              label="Organisation Name"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter Organization Name"
              className={styles.input}
            />
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth className={styles.formControl}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="name@company.com"
                  className={styles.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth className={styles.formControl}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Full Number (including code)"
                  className={styles.input}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl fullWidth className={styles.formControl}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              required
              placeholder="Write a message"
              className={styles.input}
            />
          </FormControl>
        </form>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardTwo;
