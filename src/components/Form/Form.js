import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux';

import useStyles from'./styles';
import { createBook } from '../../actions/books';

const Form = () => {


  const [bookData, setBookData] = useState({ authors: '', title: '', isbn: '', year_of_pub: '', selectedFile: ''});

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBook(bookData));
  }

  const clear = () => {

  }


  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Add a Book</Typography>
        <TextField name="authors" variant="outlined" label="Authors" fullWidth value={bookData.authors} onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={bookData.title} onChange={(e) => setBookData({ ...bookData, title: e.target.value })}/>
        <TextField name="isbn" variant="outlined" label="isbn" fullWidth value={bookData.isbn} onChange={(e) => setBookData({ ...bookData, isbn: e.target.value })}/>
        <TextField name="year" variant="outlined" label="year" fullWidth value={bookData.year_of_pub} onChange={(e) => setBookData({ ...bookData, year_of_pub: e.target.value })}/>
        <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({ base64 }) => setBookData({ ...bookData, selectedFile: base64 })}/> </div>
        <Button className = {classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth > submit </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth > clear </Button>
      </form>
    </Paper>
  );
};

export default Form;
