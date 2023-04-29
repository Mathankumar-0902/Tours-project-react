import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "Read more"}
          </button>
        </p>
        <button
          onClick={() => removeTours(id)}
          className='btn delete-btn btn-block'
        >
          Not Inserted
        </button>
      </div>
    </article>
  );
};

export default Tour;
