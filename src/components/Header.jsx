import logo from "../assets/logo.png";
import orang from "../assets/orang1.png";
import { Outlet, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../style/Header.css";

const Header = ({ showProfile = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-video">
            <b>video</b>
          </span>
          <span className="logo-belajar">
            <b>belajar</b>
          </span>
        </div>

        {showProfile && (
          <div className="nav-right desktop-only">
            <span className="nav-kategori">Kategori</span>
            <div className="profile-wrapper" ref={dropdownRef}>
              <img
                src={orang}
                alt="profil"
                className="profile-img desktop-only"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/profil" className="dropdown-item">
                    Profil Saya
                  </NavLink>
                  <NavLink to="/kelas" className="dropdown-item">
                    Kelas Saya
                  </NavLink>
                  <NavLink to="/pesanan" className="dropdown-item">
                    Pesanan Saya
                  </NavLink>
                  <NavLink to="/" className="dropdown-item keluar">
                    Keluar 🚪
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}

        {showProfile && (
          <button
            className="burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`burger-icon ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        )}
      </header>

      {showProfile && mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="#"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kategori
          </NavLink>
          <NavLink
            to="/profil"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profil Saya
          </NavLink>
          <NavLink
            to="/kelas"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kelas Saya
          </NavLink>
          <NavLink
            to="/pesanan"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pesanan Saya
          </NavLink>
          <NavLink
            to="/"
            className="mobile-menu-item keluar"
            onClick={() => setMobileMenuOpen(false)}
          >
            Keluar 🚪
          </NavLink>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header;
