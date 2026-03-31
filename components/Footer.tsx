"use client";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <footer style={{ backgroundColor: "var(--wine-deep)", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "var(--white)",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}>
            Glow With Your <span style={{fontFamily:"PPFragment-GlareRegular", color:"#D7FF9B"}}>Gut Feeling</span>
            <sup style={{ fontSize: "0.4em", verticalAlign: "super", color:"#D7FF9B" }}>™</sup>
          </h2>
        </div>

        {/* Four columns + Email signup */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "4rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }} className="footer-grid">

          {/* SHOP Column */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--white)",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px dotted rgba(255,255,255,0.3)",
            }}>SHOP</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <a href="#" style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                }}>GUTGLO™</a>
              </li>
            </ul>
          </div>

          {/* LEARN Column */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--white)",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px dotted rgba(255,255,255,0.3)",
            }}>LEARN</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["ABOUT", "SCIENCE", "INGREDIENTS"].map(item => (
                <li key={item} style={{ marginBottom: "0.75rem" }}>
                  <a href="#" style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--white)",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px dotted rgba(255,255,255,0.3)",
            }}>SUPPORT</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["CONTACT", "SHIPPING", "RETURNS", "FAQS", "WHOLESALE"].map(item => (
                <li key={item} style={{ marginBottom: "0.75rem" }}>
                  <a href="#" style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Signup Column */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--white)",
              marginBottom: "1.5rem",
            }}>JOIN THE COMMUNITY + UNLOCK YOUR MYSTERY DISCOUNT</h3>

            <form onSubmit={handleSubmit} style={{ position: "relative" }}>
              <input
                type="email"
                placeholder="EMAIL"
                required
                style={{
                  width: "100%",
                  padding: "0.85rem 3rem 0.85rem 1rem",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--white)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "0.5rem",
                }}
              >→</button>
            </form>

            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.4)",
              marginTop: "0.75rem",
              lineHeight: 1.4,
            }}>
              *By signing up, you agree to our privacy policy
            </p>
          </div>
        </div>

        {/* Social icons + Bottom info */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
        }}>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              { icon: "/icons/e4f6e38ecf0bd8bfbc40c4957dcb7dd4.png", label: "Facebook" },
              { icon: "/icons/91bd99c4659da042c80d480cb4701438.png", label: "Instagram" },
              { icon: "/icons/b7d027175b96d821fa0b2f31c7aaff5b.png", label: "TikTok" },
              { icon: "/icons/19fb6b751529056df00a52edd6a9a754.png", label: "YouTube" }
            ].map(social => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  textDecoration: "none",
                  padding: "6px",
                }}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1) opacity(1)",
                  }}
                />
              </a>
            ))}
          </div>

          {/* Bottom text */}
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
              marginBottom: "0.5rem",
            }}>
              © 2026 GLODAE WELLNESS INC.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-end", marginBottom: "1rem" }}>
              {["PRIVACY POLICY", "TERMS AND CONDITIONS"].map(item => (
                <a key={item} href="#" style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                }}>{item}</a>
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1.5,
              maxWidth: "600px",
              marginLeft: "auto",
            }}>
              *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}