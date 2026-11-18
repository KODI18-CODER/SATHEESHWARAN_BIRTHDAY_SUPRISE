import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

// Pages
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Reasons from "./pages/Reasons.jsx";
import Memories from "./pages/Memories.jsx";
import Wishes from "./pages/Wishes.jsx";
import Cake from "./pages/Cake.jsx";
import Videos from "./pages/Videos.jsx";
import Letter from "./pages/Letter.jsx";
import SecretVault from "./pages/SecretVault.jsx";
import Finale from "./pages/Finale.jsx";
import NotFound from "./pages/NotFound.jsx";

function AppLayout() {
  const location = useLocation();

  const isWelcomePage = location.pathname === "/";

  return (
    <div className="app-container">

      {/* Navigation - hidden on Welcome page */}
      {!isWelcomePage && <Navbar />}

      {/* Main Website Pages */}
      <main className="main-content">
        <Routes>
          {/* Welcome / Opening */}
          <Route path="/" element={<Welcome />} />

          {/* Home */}
          <Route path="/home" element={<Home />} />

          {/* Birthday Sections */}
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/cake" element={<Cake />} />

          {/* Your One Edited Birthday Video */}
          <Route path="/videos" element={<Videos />} />

          {/* Birthday Letter */}
          <Route path="/letter" element={<Letter />} />

          {/* Secret Birthday Surprises */}
          <Route path="/secret-vault" element={<SecretVault />} />

          {/* Final Celebration */}
          <Route path="/finale" element={<Finale />} />

          {/* Invalid Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* One Background Music Player - Available Throughout Website */}
      <MusicPlayer />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}