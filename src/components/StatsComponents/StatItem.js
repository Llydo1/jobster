import React from "react";
import Wrapper from "../../assets/wrappers/StatItem";

const StatItem = ({ icon, count, text, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title"> {text}</h5>
    </Wrapper>
  );
};

export default StatItem;
