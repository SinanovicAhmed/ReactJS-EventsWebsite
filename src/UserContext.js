import { Children, createContext, useState } from "react";

export const UserContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn) => {},
  user: {},
  setUser: (user) => {},
});

const Context = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
