const reviews = [
  { quote: "A game changer for bloating",         name: "SOPHIA W" },
  { quote: "My to-go heavy-meal rescuer",          name: "ISLA R"   },
  { quote: "Officially in my flat-stomach hot girl era", name: "EVELYN M" },
  { quote: "No more 6pm food baby!",               name: "GRACE K"  },
  { quote: "Why didn't I start this sooner?",      name: "OLIVIA T" },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#6B1010" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#FDFAF7", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{
            fontFamily: "PPFragment-GlareRegular",
            fontWeight: 400,
            fontSize: "clamp(2rem, 3vw, 2.8rem)",
            color: "#6B1010",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}>
            The Real Results<br />Speak For Themselves
          </h2>
          <p style={{
            fontFamily: "'Circular Std', sans-serif",
            fontSize: "0.9rem",
            color: "#6B1010",
            margin: "0 auto",
            fontWeight: 450
          }}>
            Thousands are discovering what balanced digestion feels like
          </p>
        </div>

        {/* Review cards */}
        <div className="rev-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}>
          {reviews.map((r) => (
            <div key={r.name} style={{
              backgroundColor: "#E4DDD3",
              borderRadius: "12px",
              padding: "2.2rem 4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0.7rem",
              minHeight: "280px",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <Stars />
                <p style={{
                  fontFamily: "PPFragment-GlareRegular",
                  fontSize: "1.4rem",
                  color: "#6B1010",
                  lineHeight: 1.4,
                  textAlign: "center",
                }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div>
                <p style={{
                  fontFamily: "'Circular Std', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#6B1010",
                  marginBottom: "0.25rem",
                  textAlign: "center",
                }}>
                  {r.name}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <p style={{
                    fontFamily: "'Circular Std', sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.08em",
                    color: "#8C7B6A",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}>
                    Verified Buyer
                  </p>
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    backgroundColor: "#6B9B3A",
                    flexShrink: 0,
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .rev-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 640px)  { .rev-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 420px)  { .rev-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}