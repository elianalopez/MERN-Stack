import React from "react";
import { useSelector } from "react-redux";

import Book from "./Book/Book.js";

const Books = () => {
  const books = useSelector((state) => state.books);

  console.log(books);

  return (
    <>
      <h1>Books</h1>
      <Book />
      <Book />
    </>
  );
};

export default Books;
