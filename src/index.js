import React from 'react';
import ReactDOM from 'react-dom/client';
// import { SocialIcon } from "react-social-icons";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/login">
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.body
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//       <Routes>
//         <Route path="/login">
//           <SocialIcon />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.body
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
