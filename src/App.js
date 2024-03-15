import "./App.css";
import "./Login.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/nav";
import Footer from "./pages/footer";
import Dashboard from './components/dashboard';
import Login from "./components/login";
import useToken from "./useToken";

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <div className="App">
        <Nav />
        {/* <Switch> */}
        <Router>
        <Routes>
          <Route path="/dashboard">
            <Dashboard className="dashboardRoute" />
          </Route>
          <Route path="/">
            <Main className="mainRoute" />
          </Route>
        </Routes>
        </Router>
        <Footer />
        {/* </Switch> */}
      </div>
    </div>
  );
};

export default App;
