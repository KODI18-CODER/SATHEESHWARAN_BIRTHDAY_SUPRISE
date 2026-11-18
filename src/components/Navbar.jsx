
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Heart,
  House,
  Sparkles,
  Camera,
  Gift,
  Cake,
  Film,
  Mail,
  LockKeyhole,
  Star,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", path: "/home", icon: House },
  { label: "Reasons", path: "/reasons", icon: Heart },
  { label: "Memories", path: "/memories", icon: Camera },
  { label: "Wishes", path: "/wishes", icon: Gift },
  { label: "Cake", path: "/cake", icon: Cake },
  { label: "Video", path: "/videos", icon: Film },
  { label: "Letter", path: "/letter", icon: Mail },
  { label: "Secret Vault", path: "/secret-vault", icon: LockKeyhole },
  { label: "Finale", path: "/finale", icon: Star },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="birthday-navbar">
      <div className="navbar-container">
        {/* BRAND */}
        <NavLink
          to="/home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <span className="navbar-brand-heart">
            <Heart fill="currentColor" size={22} />
          </span>

          <span className="navbar-brand-text">
            MYLUU <span>💜</span>
          </span>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="navbar-mobile">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar-mobile-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}
