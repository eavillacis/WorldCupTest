import React, { useEffect, useState } from "react";

import Title from "./components/Title";
import ResultCard from "./components/ResultCard";

import { useGetScores } from "./hooks/useGetScores";

import "./styles.css";

export default function App() {
  const [results, setResults] = useState({});

  useEffect(() => {
    setResults();
  }, [scores]);

  console.log(results);

  return (
    <div className="App">
      <Title teamsLength={results.length} />
      <div>
        {results.length > 0 &&
          results.map((result, index) => (
            <ResultCard index={index} result={result} />
          ))}
      </div>
    </div>
  );
}
