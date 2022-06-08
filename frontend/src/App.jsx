import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportContext from "./contexts/UserContext";

import Profilepage from "./pages/Profilepage";
import Dashboard from "./pages/Dashboard";
import Submission from "./pages/Submission";
import BackConnexion from "./pages/BackConnexion";
import Admin from "./pages/Admin";
import Project from "./pages/Project";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import ConnexionLayout from "./components/Layouts/ConnexionLayout";
import SignIn from "./components/connexion/SignIn";
import LogIn from "./components/connexion/LogIn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ExportContext.UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ConnexionLayout />}>
              <Route path="" element={<SignIn />} />
              <Route path="login/" element={<LogIn />} />
            </Route>

            <Route path="/profile" element={<Profilepage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="" element={<Dashboard />} />
              <Route path="submission/:type" element={<Submission />} />
              <Route path="project/" element={<Project />} />
            </Route>

            <Route path="/back" element={<BackConnexion />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ExportContext.UserProvider>
    </div>
  );
}

export default App;
