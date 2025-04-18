import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
    const {author, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing,tags}=singleBook;
  // const data = use (bookPromise)
  console.log(singleBook);
  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img
          className="h-[166px]"
          src={image}
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-10">
        {
            tags.map((tag, index)=><button  key={index} >{tag}</button>)
        }
        </div>
        <h2 className="card-title">
        {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>
          Book by : {publisher}
        </p>

      <div className="border-1 border-dashed"></div>
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
