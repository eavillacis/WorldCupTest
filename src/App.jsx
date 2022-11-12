import React, { useEffect, useState } from "react";

import Title from "./components/Title/Title";
import ResultCard from "./components/ResultCard/ResultCard";
import Paginator from "./components/Paginator/Paginator";

import { useGetScores } from "./hooks/useGetScores";

import "./styles.css";

export default function App() {
  const [page, setPage] = useState(0);

  const scores = useGetScores();

  const handleClick = (eventType) => {
    if (eventType === "next" && page < scores.length) setPage(page + 1);
    if (eventType === "prev" && page > 0) setPage(page - 1);
  };

  return (
    <div className="App">
      <div className="container">
        {scores.length > 0 ? (
          <>
            <Title teamsLength={scores.length} />
            <div>
              <ResultCard index={page + 1} result={scores[page]} />
            </div>
            <Paginator
              page={page}
              maxNumItems={scores.length}
              handleClick={handleClick}
            />
          </>
        ) : (
          <h1>No Results</h1>
        )}
      </div>
    </div>
  );
}
