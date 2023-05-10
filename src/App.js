import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import React, { Component, useEffect, useState } from "react";
import fire from "./config/fire";
const App = () => {
  const [tempdata, setTempData] = useState(null);
  const data = { actualdata: tempdata, setdata: setTempData };
  return (
    <>
      <Navbar data={data} />
      <Routes>
        <Route
          exact
          path="/E-mart"
          element={<Home data={setTempData} />}
          state={tempdata}
        />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
