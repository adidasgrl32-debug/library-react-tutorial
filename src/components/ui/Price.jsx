import React from 'react';

const Price = ({ salePrice, originalPrice }) => {
  if (originalPrice === undefined || originalPrice === null) {
    return null; 
  }

  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          {" "}${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
