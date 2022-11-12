import React from "react";

import "./styles.css";

export default function Paginator({ page, maxNumItems, handleClick }) {
  return (
    <div className="paginator">
      <button disabled={page === 0} onClick={() => handleClick("prev")}>
        Previous
      </button>
      <button
        disabled={page === maxNumItems - 1}
        onClick={() => handleClick("next")}
      >
        Next
      </button>
    </div>
  );
}
