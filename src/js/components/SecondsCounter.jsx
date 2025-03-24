import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SecondsCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.start || 0,
      isRunning: true,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.startCounter();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.alertTime && this.state.seconds === this.props.alertTime) {
      alert(`Tiempo alcanzado: ${this.props.alertTime} segundos`);
    }
  }

  startCounter = () => {
    this.interval = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
      }
    }, 1000);
  };

  toggleCounter = () => {
    this.setState((prevState) => ({ isRunning: !prevState.isRunning }));
  };

  resetCounter = () => {
    this.setState({ seconds: 0 });
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="display-1 bg-dark text-light p-3 rounded">
          {this.state.seconds}
        </div>
        <div className="mt-3">
          <button className="btn btn-primary me-2" onClick={this.toggleCounter}>
            {this.state.isRunning ? "Pausar" : "Reanudar"}
          </button>
          <button className="btn btn-danger" onClick={this.resetCounter}>
            Reiniciar
          </button>
        </div>
      </div>
    );
  }
}

export default SecondsCounter;
