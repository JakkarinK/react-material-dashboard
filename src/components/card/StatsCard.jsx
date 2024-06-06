import React from "react";
import "./card.scss";

const StatsCard = (props) => {
  return (
    <div className="stats-card">
      <div className="top">
        <div className={"icon-bg " + props.color}>{props.icon}</div>
        <div className="head">
          <span>{props.name}</span>
          <h4>{props.count}</h4>
        </div>
      </div>
      <hr />
      <div className="foot">
        <span>{props.percent}</span>
        <p>{props.lastest}</p>
      </div>
    </div>
  );
};

export default StatsCard;
