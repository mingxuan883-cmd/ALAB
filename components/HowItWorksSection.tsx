"use client";
import { useState } from "react";

const steps = [
  {
    keyword: "Breakdown",
    title: "Break Down Food Faster",
    desc: "Enzymes activate within minutes, breaking down complex molecules before they cause gas or bloating.",
  },
  {
    keyword: "Calm",
    title: "Calm Digestive Reactivity",
    desc: "Digestive stress can amplify discomfort after meals. Bioactive botanicals help soothe irritation and support smoother, more comfortable digestion.",
  },
  {
    keyword: "Restore",
    title: "Restore Gut Balance",
    desc: "Probiotics and prebiotics rebuild a healthy, resilient microbiome over time.",
  },
  {
    keyword: "Renew",
    title: "Renew Your Microbiome",
    desc: "Long-term probiotic colonization supports sustainable digestive wellness.",
  },
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      className="how-section"
      style={{ position: "relative", height: "715px", overflow: "hidden" }}
    >
      {/* Background — woman centered, upper portion visible */}
      <img
        src="/images/lifestyle-woman.png"
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: "90% 50%",
        }}
      />

      {/* Neutral overlay — kept light so photo shows clearly */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(30,30,30,0.36)",
      }} />

      {/* 2-col grid */}
      <div
        className="how-grid"
        style={{
          position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "38% 1fr",
          height: "100%",
          padding: "2.75rem 3.5rem",
        }}
      >
        {/* ── Left col: headline top · subtext+btn bottom ── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {/* TOP: headline */}
          <h2 style={{
            fontFamily: "'PP Fragment Glare', serif", fontWeight: 400,
            fontSize: "clamp(1.65rem, 2.3vw, 2.4rem)",
            color: "var(--white)", lineHeight: 1.2, marginLeft: "100px",
          }}>
            How GutGlo<sup style={{fontSize: "0.6em", verticalAlign: "super", lineHeight: 0}}>™</sup><br/>
            Beats Bloating in<br/>
            <span style={{color: "#D7FF9B" }}>60 Minutes</span> —
          </h2>

          {/* BOTTOM: subtext + CTA */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem",
              color: "rgba(255,255,255,1)",
              lineHeight: 1.5, marginBottom: "1rem", marginLeft: "100px",
            }}>
              Engineered for fast relief. Built for long-term balance.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                border: "2px solid rgba(255,255,255,1)",
                borderRadius: "100px",
                padding: "0.45rem 1.1rem",
                color: "var(--white)",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textDecoration: "none",
                textTransform: "uppercase",
                marginLeft: "100px",
                marginBottom: "100px",
              }}
            >
              Discover the Science
            </a>
          </div>
        </div>

        {/* ── Right col ── */}
        <div style={{ position: "relative", height: "100%" }}>

          {/* Dotted divider — sits at 46% down */}
          <div style={{
            position: "absolute",
            top: "40%", left: "20%", right: "28%",
            borderTop: "2px dotted rgba(255,255,255,1)",
          }} />

          {/* Below the dotted line: keywords (left) + card (right) */}
          <div style={{
            position: "absolute",
            top: "25%", left: "2%", right: 0, bottom: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            paddingTop: "1.2rem",
          }}>
            {/* Keywords */}
            <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "12rem",
                }}
            >
              {steps.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                <button
                    key={s.keyword}
                    onMouseEnter={() => setActiveIndex(i)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      textAlign: "left", padding: "0",
                      fontFamily: "'Circular Std', sans-serif", fontWeight: isActive ? 600 : 400,
                      fontSize: isActive
                          ? "clamp(2.4rem, 3.6vw, 3.6rem)"
                          : "clamp(2rem, 3vw, 3rem)",
                      color: i === activeIndex ? "#D7FF9B" : "rgba(255,255,255,0.45)",
                      lineHeight: 1.12,
                      display: "flex", alignItems: "flex-start", gap: "0.4rem",
                      transition: "color 0.2s", margin: 0,
                    }}
                >
                  {i === activeIndex && (
                      <span style={{color: "var(--white)", fontSize: "0.58em", marginRight: "0.1em"}}>→</span>
                  )}
                  {s.keyword}
                </button>
                )
              })}
            </div>

            {/* Info card — frosted light glass, dark body text */}
            <div style={{
              width: "210px", flexShrink: 0,
              background: "rgba(210,210,205,0.38)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "10px",
              padding: "1.25rem 1.15rem",
              border: "1px solid rgba(255,255,255,0.18)",
              alignSelf: "flex-start",transform: "translate(-320px, 100px)",transition: "all 0.3s ease"
            }}>
              <h3 style={{
                fontFamily: "'Circular Std', sans-serif", fontWeight: 400,
                fontSize: "1.5rem", color: "#D7FF9B",
                marginBottom: "1rem", lineHeight: 1.35,
              }}>
                {steps[activeIndex].title}
              </h3>
              <p style={{
                fontFamily: "'Circular Std', sans-serif", fontSize: "0.75rem",
                color: "rgba(255,255,255,1)", lineHeight: 1.65,
              }}>
                {steps[activeIndex].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-section { height: auto !important; }
          .how-grid {
            grid-template-columns: 1fr !important;
            padding: 2.5rem 1.5rem !important;
            min-height: 520px;
          }
        }
      `}</style>
    </section>
  );
}