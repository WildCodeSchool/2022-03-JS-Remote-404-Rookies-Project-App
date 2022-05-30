import React, { useState } from "react";

import SidePanel from "../components/SidePanel";
import ConnexionSwitch from "../components/ConnexionSwitch";
import SignIn from "../components/SignIn";
import LogIn from "../components/LogIn";

function Connexion() {
  const [isMember, setIsMember] = useState("false");
  const handleMember = () => {
    setIsMember(!isMember);
  };

  return (
    <div className="flex">
      <SidePanel />
      <div className="flex flex-col m-10 w-3/5 items-center">
        <ConnexionSwitch
          isMember={isMember}
          handleMember={handleMember}
          align="self-start"
        />
        {isMember ? <SignIn /> : <LogIn />}
        <ConnexionSwitch isMember={isMember} handleMember={handleMember} />
      </div>
    </div>
  );
}

export default Connexion;
