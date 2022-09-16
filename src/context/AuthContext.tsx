import React, { useState } from "react";

interface UserInterface {
  user: {
    accessToken: string;
    refreshToken: string;
    userId: string;
    username: string;
  };
  storeUser: (user: any) => void;
  removeUser: () => void;
}

export const AuthContext = React.createContext({} as UserInterface);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const storeUser = (user: UserInterface) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  const removeUser = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user, storeUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
