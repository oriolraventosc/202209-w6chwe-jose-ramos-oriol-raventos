import "./App.css";
import { useEffect } from "react";
import useAPI from "../../hooks/useAPI";

const App = () => {
  const { getAllRobots } = useAPI();
  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);
  return (
    <div className=".container">
      <header className="App-header">
        <h1>Robots List</h1>
        <span aria-label="Explore among a lot of robots">
          Ready to explore among a lot of robots?
        </span>
      </header>
    </div>
  );
};

export default App;
