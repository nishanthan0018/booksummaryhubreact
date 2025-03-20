import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [readUrl, setReadUrl] = useState("");

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        setBook(data);

        // Fetch readable book URL
        const editionResponse = await fetch(`https://openlibrary.org/works/${id}/editions.json`);
        const editionData = await editionResponse.json();
        
        // Find an edition with a readable version
        const readableEdition = editionData.entries.find((edition) => edition.ocaid);
        if (readableEdition) {
          setReadUrl(`https://archive.org/details/${readableEdition.ocaid}`);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div className="container">
      {book ? (
        <>
          <h2>{book.title}</h2>
          <h4>By {book.authors ? book.authors[0].name : "Unknown"}</h4>
          <p>{book.description ? (book.description.value || book.description) : "No description available."}</p>
          
          {readUrl && (
            <a href={readUrl} target="_blank" rel="noopener noreferrer" className="read-btn">
              📖 Read Now
            </a>
          )}
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;