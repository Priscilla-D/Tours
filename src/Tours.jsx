import Tour from "./Tour";

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section>
      {tours.map((tour) => {
        return(
        <Tour {...tour} />
        )})}
    </section>
  );
};
export default Tours;
