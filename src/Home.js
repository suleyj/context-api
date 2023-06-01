import React from "react";
import { useContext } from "react";
import { UserContext } from "./userContext";

const Home = () => {
  const { userdata } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <p>{userdata.username}</p>
    </div>
  );
};

export default Home;
