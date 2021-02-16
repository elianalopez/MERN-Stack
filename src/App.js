import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {getBooks} from './actions/books'
import Books from "./components/Books/Books";
import Form from "./components/Form/Form";
import useStyles from'./styles';

const App = () => {
  
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  },[dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Book Stack
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid items xs={12} sm={7}>
              <Books />
            </Grid>
            <Grid items xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
