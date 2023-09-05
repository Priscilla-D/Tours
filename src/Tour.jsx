const Tour = ({ id, name, info, image, price }) => {
  return (
    <article>
      <img src={image} alt="name" ></img>
      <h2>{name}</h2>
      <p>{info}</p>
      <span>{price}</span>
    </article>
  );
};
export default Tour;
