import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import styles from "./Card.module.scss";

const CardOne = () => {
  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.cardHeader}
        title="Web Development Basics"
        avatar={<ComputerIcon className={styles.icon} />}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="body1">
          Learn HTML, CSS, JavaScript and build a solid foundation for your web
          development journey. Master the fundamental building blocks of modern
          websites.
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardOne;
