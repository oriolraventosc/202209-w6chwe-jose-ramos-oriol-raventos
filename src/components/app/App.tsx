import Card from "../Card/Card";
import "./App.css";
import { useEffect } from "react";
import useAPI from "../../hooks/useAPI";

function App() {
  const { getAllRobots } = useAPI();
  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robots List</h1>
        <span> Ready to explore among a lot of robots?</span>
      </header>
      <Card />
    </div>
  );
}

export default App;
