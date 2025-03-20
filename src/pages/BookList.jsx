import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  // Default recommendation query (Change it to any genre or category)
  const DEFAULT_QUERY = "bestsellers";

  // Fetch Books Function
  const fetchBooks = async (searchQuery = DEFAULT_QUERY) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  // Fetch recommended books on page load
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>📚 Recommended Books</h2>
      <input
        type="text"
        placeholder="Enter book title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => fetchBooks(query)}>Search</button>

      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.volumeInfo.title}</h3>
              <p>
                <strong>Author:</strong>{" "}
                {book.volumeInfo.authors?.join(", ") || "Unknown"}
              </p>
              <p>
                {book.volumeInfo.description
                  ? book.volumeInfo.description.slice(0, 150) + "..."
                  : "No description available."}
              </p>
              {book.volumeInfo.previewLink && (
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              )}
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;