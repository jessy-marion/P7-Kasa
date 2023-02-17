import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // verifier BrowserRouter a l'air de servir à rien
import "./assets/styles/index.scss";
import Error from "./Pages/Error/Error";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Logement from "./Pages/Logement/Logement";
import About from "./Pages/About/About";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/logement/:id"} element={<Logement />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/*"} element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
