import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondsCounter = ({ start = 0, alertTime }) => {
  const [seconds, setSeconds] = useState(start);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (alertTime && seconds === alertTime) {
      alert(`Tiempo alcanzado: ${alertTime} segundos`);
    }
  }, [seconds, alertTime]);

  const toggleCounter = () => {
    setIsRunning(prev => !prev);
  };

  const resetCounter = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <div className="container text-center mt-5">
      <div className="display-1 bg-dark text-light p-3 rounded">
        {seconds}
      </div>
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={toggleCounter}>
          {isRunning ? "Pausar" : "Reanudar"}
        </button>
        <button className="btn btn-danger" onClick={resetCounter}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;