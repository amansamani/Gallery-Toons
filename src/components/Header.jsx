import { useState, useEffect } from 'react';
import './Header.css';
import { Link,  NavLink,useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>

      {/* ✅ LOGO → go to home */}
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <div className="logo-dot" />
        GALLERY <span>TOONS</span>
      </Link>
      
      {/* 🍔 MOBILE MENU */}
      <button
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* 🔗 NAV LINKS */}
      <nav className={`nav-bar ${menuOpen ? 'nav-bar--open' : ''}`}>

  <NavLink
    to="/"
    end
    className={({ isActive }) => isActive ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Home
  </NavLink>

  <NavLink
    to="/portrait"
    className={({ isActive }) => isActive ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Portrait
  </NavLink>

  <NavLink
    to="/landscape"
    className={({ isActive }) => isActive ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Landscape
  </NavLink>

 <NavLink
  to="/"
  className={({ isActive }) => isActive ? "active" : ""}
  onClick={(e) => {
    e.preventDefault(); // stop normal navigation

    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact
</NavLink>
</nav>
    </header>
  );
}