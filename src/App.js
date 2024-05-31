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
import Footer from "./components/footer";
import Merch from "./pages/merch";
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
      <div className="background" style={{ backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/2003575562495150723/C60BF4203B087936E6F4A23B2CBAF3771C0D9579/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`}}>
      <main className="main-content">
        <div className="page-divider"></div>
        <div className="main_title" id="b">
          <h1>DJ K Fig</h1>
        </div>
        <div className="page-divider"></div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/video" element={<Video />} />
          <Route path="/merch" element={<Merch />} />
          {/* <Route path="/get-started" element={<getSarted />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </main>
      </div>
    </div>
  );
};

export default App;
