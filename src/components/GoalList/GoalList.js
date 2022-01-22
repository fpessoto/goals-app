import React from "react";

import Goal from "../../components/Goal/Goal";

import "./GoalList.css";

const GoalList = (props) => {
  const deleteGoalHandler = (goal) => {
    console.log("goal list delete", goal);

    props.onDeleteGoalHandler(goal);
  };

  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return (
          <Goal
            goal={goal}
            key={goal.id}
            onDeleteGoalHandler={deleteGoalHandler}
          />
        );
      })}
    </ul>
  );
};

export default GoalList;
