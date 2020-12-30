import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "./Axios.js";
import "./Login.css";
function Signup() {
  const [details, setDetails] = useState({
    name: "",
    password: "",
    check: "",
    email: ""
  });

  function handleClick(e) {
    e.preventDefault();
    const { name, password, check, email } = details;
    if (!name || !password || !check || !email) {
      return;
    }
    if (password !== check) {
      return;
    }
    async function create() {
      let reply = await Axios.post("/newuser", details);
      console.log(reply);
    }
    create();
    setDetails({ name: "", password: "", check: "", email: "" });
  }

  function handleChange(e) {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="logo"
        />
      </Link>
      <div className="container">
        <h1>Create account</h1>
        <form>
          <h5>Your name</h5>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={details.name}
          />
          <h5>Email</h5>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            value={details.email}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={details.password}
            placeholder="At least 6 characters"
          />
          <h5>Re-enter password</h5>
          <input
            onChange={handleChange}
            name="check"
            type="password"
            value={details.check}
          />
          <button className="signin" onClick={handleClick}>
            Create your Amazon account
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <span>
          Already have an account{" "}
          <Link className="link1" to="/login">
            Sign-in
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Signup;
