"use client";
import { useState } from "react";

const links = [
  { label: "SHOP",         href: "#" },
  { label: "4-IN-1 GUT SCIENCE",  href: "#" },
  { label: "INGREDIENTS",  href: "#" },
  { label: "ABOUT",      href: "#" }
];

const rightLinks = [
  { label: "ACCOUNT",         href: "#" },
  { label: "USD",  href: "#" },
  { label: "CART",  href: "#" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#fff";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: "var(--wine-deep)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
        height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <a href="/" className="logo">
          Glo<span className="logo-d">d</span>ae<span className="logo-mark">™</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-d" style={{ display: "flex", gap: "2rem" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{
              fontFamily: '"CircularStd", system-ui, sans-serif', fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.8)"
            }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >{l.label}</a>
          ))}
        </nav>

        {/* Right */}
        <div style={{display: "flex", alignItems: "center", gap: "1.25rem"}}>
          {
            rightLinks.map(l => (
                  <a key={l.label} href={l.href} className="nav-link" style={{
                    fontFamily: '"CircularStd", system-ui, sans-serif', fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.8)"
                  }}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                  >{l.label}</a>
              ))
          }
          <button onClick={() => setOpen(!open)} className="nav-m" style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--white)", display: "none",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M18 6L6 18M6 6l12 12"/> : <>
                <line x1="3" y1="7" x2="21" y2="7"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="17" x2="21" y2="17"/>
              </>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
          <div style={{
            backgroundColor: "var(--wine-deep)", borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 2rem 1.5rem",
          }}>
            {links.map(l => (
                <a key={l.label} href={l.href} style={{
              display: "block", padding: "0.7rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              fontFamily: '"CircularStd", system-ui, sans-serif', fontSize: "0.82rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--white)", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .nav-m { display: none !important; } }
        @media (max-width: 768px) { .nav-d { display: none !important; } .nav-m { display: flex !important; } }
      `}</style>
    </header>
  );
}