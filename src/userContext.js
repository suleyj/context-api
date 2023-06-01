import React, { useState, useContext, createContext } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [userdata, setUserdata] = useState({ username: "star123" });
  const changeUserData = (data) => {
    setUserdata(data);
  };

  const data = {};

  return (
    <UserContext.Provider value={{ userdata, setUserdata, data }}>
      {children}
    </UserContext.Provider>
  );
}

{
  /* <UserUpdateContext value={changeUserData}> */
}
{
  /* </UserUpdateContext> */
} // const UserUpdateContext = createContext();

// export function useUserData() {
//   return useContext(UserContext);
// }

// export function useUpdateUser() {
//   return useContext(UserUpdateContext);
// }
