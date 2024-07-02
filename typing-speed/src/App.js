import React, { useState } from 'react';
import TypingArea from './components/TypingArea';
import TextDisplay from './components/TextDisplay';
import Results from './components/Results';

const App = () => {
  const [text] = useState('The lazy dog jumps over the fox.');
  const [results, setResults] = useState({ time: 0, wordCount: 0 });

  const handleTypingComplete = (time, wordCount) => {
    setResults({ time, wordCount });
  };

  return (
   
    <div className="App p-4"  style={{
      backgroundImage: 'url(./bc.avif)', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
    }}  >
      <h1 className="text-4xl mb-4 flex justify-center ">Typing Speed Test</h1>
      <h5 className = "p-3">Instructions: </h5>
      <h6 className="p-2">1. Write the below sentence in Typing space below</h6>
      <h6 className="p-2">2. Once the text is completed timer will automatically stop</h6>
      <br></br>
      <div className="p-4">
      <div className="mb-4  rounded max-w-md ">
        <TextDisplay text={text} />
      </div>
      <div className="mb-4">
        <TypingArea text={text} onTypingComplete={handleTypingComplete} />
      </div>
      <div className="mt-4">
        <Results time={results.time} wordCount={results.wordCount} />
      </div>
    </div>
    </div>
  );
};

export default App;
