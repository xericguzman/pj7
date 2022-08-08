import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  const fetchAstronauts = async () => {
    let response = await axios.get(
      "https://directory-of-astronauts-2022.herokuapp.com/api/astronauts"
    );

    setAstronauts(response.data);
  };

  useEffect(() => {
    fetchAstronauts();
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home astronauts={astronauts} />} />
          <Route path="/astronauts/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
