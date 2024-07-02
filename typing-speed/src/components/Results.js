import React from 'react';

const Results = ({ time, wordCount }) => {
  const wpm = (wordCount / time) * 60;

  return (
    <>
    <h2 className="flex  text-3xl ">Result:</h2>
    <div className="results p-4 border rounded bg-red-300 w-2/4 position ">
      <h3 className="text-white">Results</h3>
      <p className="text-white font-semibold" >Time: {time}s</p>
      <p className="text-white">Words: {wordCount}</p>
      <p className="text-white">WPM: {wpm.toFixed(2)}</p>
    </div>
    </>
  );
};

export default Results;
