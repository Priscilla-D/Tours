import { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline" />
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} handleRemove={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
