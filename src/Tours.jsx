import Tour from "./Tour";

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section>
      {tours.map((tour) => {
        <Tour {...tour} />;
      })}
    </section>
  );
};
export default Tours;
