import "./App.css";
import "./Login.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/nav";
import Fav from "./pages/fav";
import About from "./pages/about";
import Review from "./pages/review";
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
            <Route path="/fav" element={<Fav />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </>
      </div>
    </div>
  );
};

export default App;
