import { useState, useEffect } from "react";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const fetchDatas = async () => {
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
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return <></>;
}

export default App;
