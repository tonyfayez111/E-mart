import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(props) {
  const state = useSelector((state) => state.handleCart);

  const List = () => {
    if (window.innerWidth < 576) {
      console.log(window.innerWidth);
      // return (
      //   <>
      //     <div>
      //       {Login()}
      //       {Register()}
      //       {Saved()}

      //       {Logout()}
      //     </div>
      //   </>
      // );
    }
  };
  const handleLogout = () => {
    props.data.setdata(null);
    console.log(props.data, "ana handle logout");
  };
  const Saved = () => {
    return (
      <NavLink
        to="/cart"
        className="btn btn-outline-dark ms-2 d-flex align-items-center"
      >
        <i className="fa fa-sharp fa-solid fa-bookmark me-2"></i> Saved (
        {state.length})
      </NavLink>
    );
  };
  const Login = () => {
    if (props.data.actualdata != null) {
      return (
        <>
          <div className="card  --bs-dark">
            <div className="card-body ">{props.data.actualdata}</div>
          </div>
        </>
      );
    } else {
      return (
        <NavLink to="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-1"></i> Login
        </NavLink>
      );
    }
  };
  const Register = () => {
    if (props.data.actualdata === null)
      return (
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
          <i className="fa fa-user-plus me-1"></i> Register
        </NavLink>
      );
  };
  const Logout = () => {
    if (props.data.actualdata != null) {
      return (
        <NavLink
          to="/E-mart"
          className="btn btn-outline-dark ms-2 d-flex align-items-center"
          onClick={handleLogout}
        >
          <i className="fa-sharp fa-regular fa-x"></i> Logout
        </NavLink>
      );
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/E-mart">
            Collection
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/E-mart"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons d-flex flex-direction-column">
              {Login()}
              {Register()}
              {Saved()}
              {List()}
              {Logout()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
