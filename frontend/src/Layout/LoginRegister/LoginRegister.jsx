import React from "react";
import { Box, Grid, Container, Typography, Divider } from "@material-ui/core";
import styles from "./LoginRegister.module.css";

const LoginRegister = (props) => {
  return (
    <Box className={styles.wrapper_container}>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10} sm={5} md={3} lg={3}>
          <Box className={styles.img_container}>
            <img src="book.png" width="150" alt="" />
          </Box>
          <Grid container className={styles.form_container}>
            <div>{props.children}</div>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <div className={styles.divider} />      
    </Box>
  );
};
export default LoginRegister;
