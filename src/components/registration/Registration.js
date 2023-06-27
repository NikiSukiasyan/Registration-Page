import React, { useState } from "react";
import "./Registration.css";
import FirstBackgroundImage from "../../images/Rectangle 8.png";
import SecondBackgroundImage from "../../images/Rectangle 7.png";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ShowInformation = () => {
    if (email.trim().length <= 0 || password.trim().length <= 0) {
      alert("გთხოვთ შეავსოთ ყველა ველი");
    } else if (password.trim().length < 8) {
      alert("პაროლი უნდა შეიცავდეს მინიმუმ რვა სიმბოლოს");
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="background">
      <img src={FirstBackgroundImage} alt="Background 1" />
      <img
        src={SecondBackgroundImage}
        alt="Background 2"
        className="second-back-img"
      />
      <div className="register-box">
        <h1 className="title">Create An Account</h1>
        <p className="about">
          Create an account to enjoy all the services without any ads for free!
        </p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={ShowInformation}>Create Account</button>
          <p>
            Already Have An Account?
            <span className="signin-text"> Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
