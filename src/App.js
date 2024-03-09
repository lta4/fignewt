import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
// import logo from './logo.svg';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) =>res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Hi FigNewt
      </header>
    </div>
  );
}

export default App;
