import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondsCounter = ({ start = 0, alertTime }) => {
  const [seconds, setSeconds] = useState(start);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (alertTime && seconds === alertTime) {
      alert(`Tiempo alcanzado: ${alertTime} segundos`);
    }
  }, [seconds, alertTime]);

  return (
    <div className="container text-center mt-5">
      <div className="display-1 bg-dark text-light p-3 rounded">{seconds}</div>
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pausar" : "Reanudar"}
        </button>
        <button className="btn btn-danger" onClick={() => setSeconds(0)}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;
