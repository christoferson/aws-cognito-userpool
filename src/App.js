import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <Settings />
    </Account>
  );
};

export default App;
