import React, { useState, useEffect } from 'react';

const TypingArea = ({ text, onTypingComplete }) => {
  const [input, setInput] = useState('');
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [stopButtonColor, setStopButtonColor] = useState('bg-blue-500'); // Default color for Stop button
  const [startButtonColor, setStartButtonColor] = useState('bg-green-500'); // Default color for Start button

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === text.trim()) {
      setIsActive(false);
      setStopButtonColor('bg-red-500'); // Change Stop button color to red on completion
      onTypingComplete(time, text.trim().split(' ').length);
    } else {
      setStopButtonColor('bg-blue-500'); // Reset Stop button color if typing continues
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setInput('');
    setTime(0);
    setStopButtonColor('bg-blue-500'); // Reset Stop button color on start
  };

  const handleStop = () => {
    setIsActive(false);
    onTypingComplete(time, input.trim().split(' ').length);
  };

  return (
    <div className="typing-area w-3/4">
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Start typing..."
        className="w-full h-32 p-2 border rounded"
      />
      <div className="mt-2">
        <button onClick={handleStart} className={`p-2 text-white rounded mr-2 ${startButtonColor}`}>
          Start
        </button>
        <button onClick={handleStop} className={`p-2 text-white rounded ${stopButtonColor}`}>
          Stop
        </button>
      </div>
      <div>Time: {time}s</div>
    </div>
  );
};

export default TypingArea;
