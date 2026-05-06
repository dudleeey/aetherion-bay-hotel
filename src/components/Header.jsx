import { useState } from "react";

const navLinks = ["Home", "Rooms", "Amenities", "Gallery", "Location", "Contact"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="logo">
          Aetherion Bay Hotel
        </a>

        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-book">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
