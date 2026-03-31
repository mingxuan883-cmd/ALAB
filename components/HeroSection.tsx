const CIRCULAR = '"CircularStd", system-ui, sans-serif';
const PPFRAGMENT = '"PPFragment", Georgia, serif';
const LIME = "#c2e040";

export default function HeroSection() {
  return (
    <section style={{
      backgroundColor: "var(--wine-deep)",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background image */}
      <img
        src="/images/product-jar.png"
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center center",
        }}
      />

      {/* Content */}
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "2rem 2rem",
        position: "relative", zIndex: 2, width: "100%",
      }}>
        <div style={{ maxWidth: "600px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "1.1rem",
          }}>
            <span style={{
              fontFamily: "'PPFragment-GlareRegularItalic', serif", fontSize: "0.9rem", fontWeight: 500,
              color: "#ffffff", letterSpacing: "0.04em",
              border: "2px solid rgba(255,255,255,0.35)",
              borderRadius: "100px", padding: "0.15rem 0.5rem",
            }}>GutGlo<sup style={{ fontSize: "0.6em", verticalAlign: "super", lineHeight: 0 }}>™</sup></span>
            <span style={{
              fontFamily: CIRCULAR, fontSize: "0.9rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#D7FF9B",
            }}>4-IN-1 GUT SCIENCE</span>
          </div>

          {/* Headline — 1. lighter weight  2. tighter line-height */}
          <h1 style={{ margin: 0, padding: 0 }}>
            <span style={{
              display: "block",
              fontFamily: CIRCULAR, fontWeight: 500,
              fontSize: "clamp(2.24rem, 4vw, 3.84rem)",
              color: "#ffffff", lineHeight: 0.95, letterSpacing: "-0.02em",
            }}>Beat Bloating in</span>
            <span style={{
              display: "block",
              fontFamily: PPFRAGMENT, fontWeight: 400,
              fontSize: "clamp(2.24rem, 4vw, 3.84rem)",
              color: "#D7FF9B", lineHeight: 1.0, letterSpacing: "-0.025em",
            }}>60 Minutes.</span>
          </h1>

          {/* Description — tighter line-height */}
          <p style={{
            fontFamily: CIRCULAR, fontSize: "0.88rem", fontWeight: 400,
            color: "#ffffff", lineHeight: 1.5,
            maxWidth: "460px", marginTop: "1.1rem", marginBottom: "1.8rem",
          }}>
            With science-backed formulas built for lasting gut balance
            and results you can feel in as little as 60 days.
          </p>

          {/* CTA — tighter padding + letter-spacing */}
          <a href="#" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: CIRCULAR, fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none",
            backgroundColor: "#D7FF9B", color: "#1c2a06",
            padding: "0.75rem 1.8rem", borderRadius: "100px",
          }}>SHOP GUTGLO<sup style={{fontSize: "0.6em", verticalAlign: "super", lineHeight: 0}}>™</sup></a>

        </div>
      </div>

    </section>
  );
}