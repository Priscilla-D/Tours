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

  return (
    <main>
      {isLoading && <Loader />}
      <Tours tours={tours} />
    </main>
  );
}

export default App;
