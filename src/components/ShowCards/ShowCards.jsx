import axios from "axios";
import { useEffect, useState } from "react";
import ShowCard from "../showCard/ShowCard";

export default function ShowCards() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
      {books?.map((book) => (
        <ShowCard key={book.bookId} book={book}></ShowCard>
      ))}
    </div>
  );
}
