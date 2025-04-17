import React from "react";

const SecondsCounter = ({ seconds, toggleCounter, resetCounter, isRunning }) => {
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