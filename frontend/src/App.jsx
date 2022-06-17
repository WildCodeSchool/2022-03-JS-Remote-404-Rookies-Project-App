import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportContextUser from "./contexts/UserContext";
import ExportContextProject from "./contexts/ProjectContext";

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
import Teampage from "./pages/Teampage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ExportContextUser.UserProvider>
        <ExportContextProject.ProjectProvider>
          <Router>
            <Routes>
              <Route path="/" element={<ConnexionLayout />}>
                <Route path="" element={<SignIn />} />
                <Route path="login/" element={<LogIn />} />
              </Route>

              <Route path="/" element={<DashboardLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="projets/*" element={<Project />} />

                <Route path="submission" element={<Submission />} />
                <Route path="profile" element={<Profilepage />} />
                <Route path="team" element={<Teampage />} />
              </Route>

              <Route path="/back" element={<BackConnexion />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Router>
        </ExportContextProject.ProjectProvider>
      </ExportContextUser.UserProvider>
    </div>
  );
}

export default App;
