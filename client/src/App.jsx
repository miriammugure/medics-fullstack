import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Patient from "./pages/Patient/Patient";
import Expectancy from "./pages/Expectancy/Expectancy";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="Expectancy" element={<Expectancy />} />
          <Route path="Pharmacy" element={<Pharmacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
