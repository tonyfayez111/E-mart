import React from "react";
import Products from "./Products";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Bg from "../assets/Bg.jpeg";

export default function Home(props) {
  let location = useLocation();

  if (location.state != null) {
    props.data(location.state);
  }

  return (
    <div>
      <div className="hero">
        <div className="card text-bg-dark border-0 ">
          <img src={Bg} className="card-img" alt="Background" height="550px" />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="conteiner">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
}
