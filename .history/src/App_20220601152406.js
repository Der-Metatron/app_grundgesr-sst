import React from "react";
import "./App.css";
import Quiz from "./components/QuizMain";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route patch="/" exact components={Quiz} />
      </Router>
      <Quiz />
    </div>
  );
}

export default App;
