import React from "react";
import "./App.css";
import Quiz from "./components/QuizMain";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/QuizMain";

import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/QuizMain";
import QuizSummary from "./components/quiz/QuizSummary";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/play/instructions" exact component={QuizInstructions} />
        <Route path="/play/quiz" exact component={Play} />
        <Route path="/play/quizSummary" exact component={QuizSummary} />
      </Router>
    </div>
  );
}

export default App;
