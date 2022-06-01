import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: 'Was ist React"?',
      2: "Was ist Javascript?",
      3: "Was sind Hooks?",
      4: "Was ist React-Dom?",
    },
    answers: {
      1: {
        1: "Ist eine Stadt",
        2: "Ist ein Reaktor",
        3: "ist ein JavaScript-Framework",
      },
      2: {
        1: "Ist ein tool von erstellen von webseiten",
        2: "Ist eine Scriptsprache",
        3: "Ist ein auf C+ basierendes Tool",
      },
      3: {
        1: "eine sprache zum erstellen einer datenbankstrukturen",
        2: "ein programm zum erstellen von Designes",
        3: "damit lassen sich state und andere react future benutzen",
      },
      4: {
        1: "vergleicht das vorherige und jetztige Element und dessen Kindelemente miteinander",
        2: "Ist eine Kirche",
        3: "Ist ein Framework",
      },
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "3",
      4: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
      this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(quiestions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
