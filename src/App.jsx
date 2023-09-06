import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loader from "./Loader";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDatas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      if (!response.ok) {
        throw response;
      }
      setTours(tours);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const removeTour = (id) => {
    const toursList = [...tours];
    const newList = toursList.filter((tour) => tour.id !== id);
    setTours(newList);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="refresh">
      <button
        className="btn refresh"
        type="button"
        onClick={() => fetchDatas()}
      >
        Refresh
      </button>
      </div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
