import React from "react";
import "./App.css";
import Quiz from "./components/QuizMain";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Quiz} />
      </Router>
    </div>
  );
}

export default App;
