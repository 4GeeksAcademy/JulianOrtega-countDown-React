import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/index.css';
import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;
let isRunning = true;
const alertTime = 10;
const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  root.render(
    <React.StrictMode>
      <SecondsCounter
        seconds={seconds}
        isRunning={isRunning}
        toggleCounter={() => {
          isRunning = !isRunning;
          render();
        }}
        resetCounter={() => {
          seconds = 0;
          isRunning = true;
          render();
        }}
      />
    </React.StrictMode>
  );
}

setInterval(() => {
  if (isRunning) {
    seconds++;
    if (seconds === alertTime) alert(`Tiempo alcanzado: ${alertTime} segundos!`);
    render();
  }
}, 1000);

render();