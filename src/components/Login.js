import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.error("Failed to login", err);
        setResponseMessage(err.code + " : " + err.message);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      	<h1>Login</h1>
        <div>{responseMessage}</div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
		<br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
