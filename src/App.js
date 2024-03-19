import "./App.css";
import "./Login.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/nav";
import Footer from "./pages/footer";
import Dashboard from './components/dashboard';
import Login from "./components/login";
import useToken from "./useToken";
import NoMatch from "./components/noMatch";

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <div className="App">
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
              {/* <Main className="mainRoute" /> */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </>
      </div>
    </div>
  );
};

export default App;
