import React from "react";

import "./Goal.css";

const Goal = (props) => {
  const deleteGoalHandler = (event) => {
    props.onDeleteGoalHandler(props.goal);
  };

  return (
    <li key={props.goal.id}>
      {props.goal.text}{" "}
      <button type="button" onClick={deleteGoalHandler}>
        x
      </button>
    </li>
  );
};

export default Goal;
