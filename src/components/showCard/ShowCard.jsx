import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/productRating";

/* eslint-disable react/prop-types */
export default function ShowCard({ book }) {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="w-full h-52 p-3 rounded-md " src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>
          {tags?.map((tag) => (
            <span className="text-slate-400 mx-1" key={tag.index}>
              {tag}
            </span>
          ))}
        </p>
        <h2 className="card-title mx-1">{bookName}</h2>
        <h5 className="mx-1">{author}</h5>
        <h6 className="mx-1">{category}</h6>
        <ProductRating rating={rating}></ProductRating>
        <div className="card-actions justify-end">
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn btn-ghost btn-outline">Book Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
