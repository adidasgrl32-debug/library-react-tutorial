import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Rating from './Rating';
import Price from './Price';

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      //when the component unmouts
      mountedRef.current = false;
    }
  })

  return (
   <div className="book">
    {img ? (
       <>
          <Link to={"/books/${books.id}"}>
            <figure className="book__img--wrapper">
              <img
                src={img.src}
                alt=""
                className="book__img" />
              </figure>
            </Link>
            <div className="book__title">
              <Link to={"/books/${books.id}"} className="book__title--link">
                {book.Title}
              </Link>
            </div>
            <Rating rating={book.rating}/>
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
    ) : (
      <> 
      <div className="book__img--skelton"></div>
        <div className="book__title--skelton"></div>
          <div className="book__rating--skelton"></div>
            <div className="book__price--skelton"></div>
      </>
    )}
    </div>
  );
};

export default Book;