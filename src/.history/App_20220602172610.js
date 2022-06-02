import React,{ useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/QuizMain";
import



function App() {
  const [currentQuestion, setCurrentQuestion] = useState([]); 
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}`);
        setCurrentQuestion(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []); 
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
