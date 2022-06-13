import { createContext, useState } from "react";
import users from "../assets/dataset/users.json";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(users[2]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
const ExportContext = {
  UserContext,
  UserProvider,
};
export default ExportContext;
