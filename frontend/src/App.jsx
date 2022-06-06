import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportContext from "./contexts/UserContext";

import Connexion from "./pages/Connexion";
import Profilepage from "./pages/Profilepage";
import Dashboard from "./pages/Dashboard";
import Submission from "./pages/Submission";
import BackConnexion from "./pages/BackConnexion";
import Admin from "./pages/Admin";
import Project from "./pages/Project";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ExportContext.UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Connexion />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submission" element={<Submission />} />

            <Route path="/back" element={<BackConnexion />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/project/" element={<Project />} />
          </Routes>
        </Router>
      </ExportContext.UserProvider>
    </div>
  );
}

export default App;
