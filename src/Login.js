import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUpdateUser } from "./userContext";

import { useContext } from "react";
import { UserContext } from "./userContext";
const Login = () => {
  const { setUserdata } = useContext(UserContext);

  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setUserdata({ username: value });
    navigate("/home");
  };

  const [username, setusername] = useState("");

  const changeUsername = (value) => {
    setusername(value);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          changeUsername(e.target.value);
        }}
      />
      <br />
      <button onClick={() => handleButtonClick(username)}>Login</button>
    </div>
  );
};

export default Login;
