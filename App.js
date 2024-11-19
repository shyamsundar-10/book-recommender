import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import { fetchBooks } from "./services/bookService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Search query cannot be empty!");
      return;
    }
    try {
      const result = await fetchBooks(query);
      setBooks(result);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">FindBook</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <BookList books={books} />
    </Container>
  );
};

export default App;
