import { createContext, useState } from "react";
import users from "../assets/dataset/users.json";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(users[0]);
  const handleUser = (data) => {
    setUser({ ...user, ...data });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const ExportContextUser = {
  UserContext,
  UserProvider,
};
export default ExportContextUser;
