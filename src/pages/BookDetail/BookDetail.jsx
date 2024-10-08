/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductRating from "../../components/ProductRating/productRating";
import swal from "sweetalert";
import Swal from "sweetalert2";

export default function BookDetail() {
  const [book, setBook] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("https://book-shop-server-two.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const specificBook = data?.find((b) => b?.bookId == params?.bookId);

        setBook(specificBook);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={book?.image}
          className="lg:w-1/3 md:w-1/2 w-4/5 rounded-lg shadow-2xl"
        />
        <div className="lg:p-2 md:p-2 p-5">
          <h2 className="text-4xl mx-1">{book?.bookName}</h2>
          <h5 className="mx-1">{book?.author}</h5>
          <h6 className="mx-1">{book?.category}</h6>
          <p className="mx-1">{book?.review}</p>
          <p>
            {book?.tags?.map((tag) => (
              <span className="text-slate-400 mx-1" key={tag.index}>
                {tag}
              </span>
            ))}
          </p>
          <div className="flex justify-between items-center my-2">
            <p>{book?.totalPages} pages</p>
            <p>{book?.publisher}</p>
          </div>

          <div className="flex justify-between items-center my-2">
            <p>{book?.yearOfPublishing}</p>
            <ProductRating rating={book?.rating}></ProductRating>
          </div>

          <div className="">
            <button
              onClick={() =>
                Swal.fire({
                  title: "Good job!",
                  text: `${book?.bookId} ${book?.bookName} has been successfully added to the Wishlist`,
                  icon: "success",
                })
              }
              className="btn btn-primary btn-outline"
            >
              Wish to Read
            </button>

            <button
              onClick={() =>
                Swal.fire({
                  title: "Good job!",
                  text: `${book?.bookId} ${book?.bookName} has been successfully added to the Cart`,
                  icon: "success",
                })
              }
              className="btn btn-ghost btn-outline mx-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
