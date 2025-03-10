import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from "./components/SecondsCounter";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter start={0} alertTime={10} />
  </React.StrictMode>,
)
