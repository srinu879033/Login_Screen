import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const SignUpLogin = () => {
  const history = useNavigate();
  const [login, setLogin] = useState(true);
  const storeUserDetails = (e) => {
    e.preventDefault();
    const emailId = document.getElementById("emailId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    let gender = "";
    if (document.getElementById("male").checked) {
      gender = "Male";
    } else if (document.getElementById("female").checked) {
      gender = "Female";
    } else {
      alert("Gender not selected");
      return;
    }
    if (confirmPassword !== password) {
      alert("Passwords are not same");
    } else {
      const userDetails = {
        emailId: emailId,
        gender: gender,
        password: password,
      };
      let existingUsers = localStorage.getItem("userDetails");
      if (existingUsers === null) {
        let arr = [userDetails];

        localStorage.setItem("userDetails", JSON.stringify(arr));
      } else {
        existingUsers = JSON.parse(existingUsers);
        existingUsers.push(userDetails);
        localStorage.setItem("userDetails", JSON.stringify(existingUsers));
        alert("Successfully created an account");
        window.location.reload();
      }
    }
  };
  const validateLoginDetails = (e) => {
    e.preventDefault();
    const emailId = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const existingUsers = JSON.parse(localStorage.getItem("userDetails"));
    let validEmail = false;
    let validPassword = false;
    for (let x of existingUsers) {
      if (x.emailId === emailId) {
        validEmail = true;
        if (x.password === password) {
          validPassword = true;
        }
        if (validPassword) {
          break;
        }
      }
    }
    if (validEmail && validPassword) {
      localStorage.setItem("jwt_token", "LOGIN SUCCESS");
      history("/fetch_auth");
    } else if (!validEmail) {
      alert("Account does not exist");
    } else if (!validPassword) {
      alert("Password is incorrect");
    }
  };
  return (
    <div id="container" className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "0";
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className="toggle-btn"
            onClick={() => {
              var btn = document.getElementById("btn");
              btn.style.left = "110px";
              setLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>

        {login && (
          <form id="login" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Name"
              autoComplete="email"
              id="login-email"
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              autoComplete="password"
              id="login-password"
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button
              type="submit"
              className="submit-btn"
              onClick={validateLoginDetails}
            >
              Log In
            </button>
          </form>
        )}
        {!login && (
          <form id="register" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter email"
              id="emailId"
            />
            <div style={{ marginTop: 8 }}>
              <label style={{ fontSize: 14, paddingRight: 10 }}>Gender :</label>
              <input
                type="radio"
                className="genderButton"
                name="gender"
                id="male"
                value="Male"
                autoComplete=""
              />
              <label for="male" className="genderLabel">
                Male
              </label>
              <input
                type="radio"
                className="genderButton"
                id="female"
                name="gender"
                value="Female"
              />
              <label id="female" className="genderLabel">
                Female
              </label>
            </div>
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              id="password"
            />
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              id="confirm-password"
            />

            <input type="checkbox" className="check-box" />
            <span>I agree to the terms & Conditions</span>
            <button
              type="submit"
              className="submit-btn"
              onClick={storeUserDetails}
            >
              Create new account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpLogin;
