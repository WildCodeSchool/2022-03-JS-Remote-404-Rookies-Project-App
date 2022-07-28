import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExportContextUser from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <ExportContextUser.UserProvider>
      <App />
    </ExportContextUser.UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
