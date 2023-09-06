import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>
          {isReadMore ? `${info} ${" "}` : `${info.substring(0, 200)}...${" "}`}
          <button
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
