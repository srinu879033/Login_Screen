import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt_token");
    history("/");
    alert("Successfully Logged out");
  };
  return (
    <ul>
      <li>
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      </li>
      <li>
        <p>About</p>
      </li>
      <li>
        <p>Contact</p>
      </li>
      <li>
        <p>Home</p>
      </li>
    </ul>
  );
};

export default NavBar;
