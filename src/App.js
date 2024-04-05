import React from "react";
import "./App.css";
import "./Login.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nav from "./components/nav";
import NavHook from "./components/navHook";
import Shows from "./pages/shows";
import About from "./pages/about";
import Video from "./pages/video";
import Footer from "./pages/footer";
import Dashboard from './components/dashboard';
import Login from "./components/login";
import useToken from "./useToken";
import NoMatch from "./components/noMatch";

const App = () => {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
     <div className="App">
      {/* <Nav /> */}
      <NavHook />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/get-started" element={<getSarted />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
      </main>
     </div>
  );
};

export default App;
