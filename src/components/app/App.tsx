import Card from "../Card/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robots List</h1>
        <span aria-label="Explore among a lot of robots">
          Ready to explore among a lot of robots?
        </span>
      </header>
      <Card />
    </div>
  );
}

export default App;
