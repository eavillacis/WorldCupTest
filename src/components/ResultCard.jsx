import React from "react";

export default function ResultCard({ index, result }) {
  return (
    <div key={result}>
      #{index} Team {result.team} with {result.score} points
    </div>
  );
}
