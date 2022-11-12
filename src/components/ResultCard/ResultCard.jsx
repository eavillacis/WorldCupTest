import React from "react";

import "./styles.css";

export default function ResultCard({ index, result }) {
  return (
    <div className="wrapperBox">
      <div className="teamBox">
      #{index} Team {result.team} with {result.score} points
      </div>
    </div>
  );
}
