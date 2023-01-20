import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GameBoard />
    </div>
  );
}

export default App;
