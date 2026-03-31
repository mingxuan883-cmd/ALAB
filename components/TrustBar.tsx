const items = [
  "INGREDIENT TRANSPARENCY",
  "CLINICALLY STUDIED",
  "NO FILLERS",
  "GMP CERTIFIED",
  "CRUELTY FREE",
  "THIRD PARTY TESTED",
  "DOCTOR FORMULATED",
  "SATISFACTION GUARANTEED",
];

export default function TrustBar() {
  return (
    <div style={{
      backgroundColor: "var(--olive-strip)",
      padding: "0.6rem 0",
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{
        display: "flex", gap: "3rem",
        animation: "scrollLeft 28s linear infinite",
        width: "max-content",
      }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            whiteSpace: "nowrap",
          }}>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: "0.62rem",
              fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.75)",
            }}>{item}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.5rem" }}>✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}