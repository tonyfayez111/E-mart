import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(props) {
  console.log(props.data.actualdata, "ana navbar");
  const state = useSelector((state) => state.handleCart);
  // const List = () => {
  //   return (
  //     <div className="dropdown-menu dropdown-menu-right">
  //       <button className="dropdown-item" type="button">
  //         Action
  //       </button>
  //       <button className="dropdown-item" type="button">
  //         Another action
  //       </button>
  //       <button className="dropdown-item" type="button">
  //         Something else here
  //       </button>
  //     </div>
  //   );
  // };
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
        <i className="fa fa-sharp fa-solid fa-bookmark mx-2"></i> Saved (
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
          to="/"
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
      <nav className="navbar navbar-expand-md navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Collection
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
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

            <div className="buttons d-flex">
              {Login()}
              {Register()}
              {Saved()}
              {Logout()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
