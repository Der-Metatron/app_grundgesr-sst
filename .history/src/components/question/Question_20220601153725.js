import React from "react";
import "./Question.css";

import axios from "axios";

axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});

const Question = (props) => {
  return <h1>{props.question}</h1>;
};

export default Question;
