import logo from "./logo.svg";
import "./App.css";
import Button from "./stories/components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">import SB</Button>
      </header>
    </div>
  );
}

export default App;
