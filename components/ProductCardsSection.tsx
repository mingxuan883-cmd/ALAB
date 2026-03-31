const CIRCULAR = '"CircularStd", system-ui, sans-serif';
const PPFRAGMENT = '"PPFragment", Georgia, serif';
const LIME = "#c2e040";

const products = [
  {
    tag: "FAST RELIEF",
    title: "Advanced\nDigestive Enzyme\nSystem",
    label: "Digestive Breakdown Support",
  },
  {
    tag: "FAST RELIEF",
    title: "BioActive\nBotanical Calm &\nDefense Blend",
    label: "Gut Soothing & Defense Support",
  },
  {
    tag: "LONG-TERM RENEWAL",
    title: "Probiotic\nMicrobiome\nRenewal Complex",
    label: "Microbial Balance",
  },
  {
    tag: "LONG-TERM RENEWAL",
    title: "Prebiotic +\nPostbiotic\nSynergy Matrix",
    label: "Gut Environment Support",
  },
];

export default function ProductCardsSection() {
  return (
    <section style={{
      backgroundColor: "#FDFAF7",
      padding: "6rem 2rem 4rem",
    }}>
      <div style={{maxWidth: "1280px", margin: "0 auto"}}>

        {/* Heading */}
        <div style={{textAlign: "center", marginBottom: "4rem"}}>
          <h2 style={{
            fontFamily: "'PP Fragment Glare', serif",
            fontSize: "clamp(1.8rem, 2.7vw, 2.65rem)",
            color: "#5D0202", fontWeight: 400,
            lineHeight: 1, margin: "0.1rem 0 0.8rem 0",
          }}>
            The 4-In-1<br/>
            Gut Science System<sup style={{fontSize: "0.38em", verticalAlign: "super"}}>™</sup>
          </h2>
          <p style={{
            fontFamily: CIRCULAR, fontSize: "0.88rem", fontWeight: 400, letterSpacing: "0em",
            color: "#5D0202", maxWidth: "470px",
            margin: "0 auto", lineHeight: 1.28,
          }}>
            A multi-layered system designed to deliver fast digestive relief
            while rebuilding long-term gut balance
          </p>
        </div>

        {/* Cards */}
        <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
            className="prod-grid"
        >
          {products.map((p) => (
              <div
                  key={p.label}
                  className="prod-card"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "7 / 10",
                    minHeight: "260px",
                    transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease",
                  }}
              >
                {/* Background image */}
                <img
                    src="/images/abstract-bg.png"
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                />

                {/* Overlay */}
                <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                          "linear-gradient(to bottom, rgba(12,18,5,0.28) 0%, rgba(12,18,5,0.18) 22%, rgba(11,18,4,0.28) 45%, rgba(8,12,3,0.58) 100%)",
                    }}
                />

                {/* Content Layer */}
                <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                    }}
                >
                  {/* Top tag */}
                  <div
                      style={{
                        position: "absolute",
                        top: "1.15rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        width: "100%",
                        padding: "0 1rem",
                      }}
                  >
          <span
              style={{
                fontFamily: "'PP Fragment Glare', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,1)",
              }}
          >
            {p.tag}
          </span>
                  </div>

                  {/* Center title */}
                  <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "82%",
                        textAlign: "center",
                      }}
                  >
                    <h3
                        style={{
                          fontFamily: "'Circular Std', sans-serif",
                          fontWeight: 300,
                          fontSize: "1.4rem",
                          lineHeight: 1.18,
                          letterSpacing: "-0.01em",
                          color: "#D7FF9B",
                          margin: 0,
                          whiteSpace: "pre-line",
                        }}
                    >
                      {p.title}
                    </h3>
                  </div>

                  {/* Bottom pill */}
                  <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "2rem",
                        transform: "translateX(-50%)",
                        width: "100%",
                        textAlign: "center",
                        padding: "0 1rem",
                      }}
                  >
          <span
              style={{
                display: "inline-block",
                width: "250px",
                fontFamily: "'Circular Std', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0em",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.72)",
                borderRadius: "999px",
                padding: "0.28rem 1rem",
                background: "rgba(255,255,255,0.02)",
                textAlign: "center",
                boxSizing: "border-box",
              }}
          >
            {p.label}
          </span>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Timeline */}
          {/* Timeline */}
          <div
              style={{
                  position: "relative",
                  width: "100%",
                  height: "110px",
                  marginTop: "1.2rem",
              }}
          >
              {/* SVG (line + dots 完全对齐) */}
              <svg
                  width="100%"
                  height="42"
                  viewBox="0 0 1000 42"
                  preserveAspectRatio="none"
                  style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      overflow: "visible",
                  }}
              >
                  {/* line */}
                  <line
                      x1="0"
                      y1="20"
                      x2="1000"
                      y2="20"
                      stroke="#8F2A22"
                      strokeWidth="1.2"
                  />

                  {/* left outer ring */}
                  <circle
                      cx="12"
                      cy="20"
                      r="8.5"
                      fill="#FDFAF7"
                      stroke="#8F2A22"
                      strokeWidth="1.2"
                  />
                  {/* left inner dot */}
                  <circle
                      cx="12"
                      cy="20"
                      r="4.5"
                      fill="#7A120E"
                  />

                  {/* center outer ring */}
                  <circle
                      cx="500"
                      cy="20"
                      r="8.5"
                      fill="#FDFAF7"
                      stroke="#8F2A22"
                      strokeWidth="1.2"
                  />
                  {/* center inner dot */}
                  <circle
                      cx="500"
                      cy="20"
                      r="4.5"
                      fill="#7A120E"
                  />
              </svg>

              {/* 60 MINUTES */}
              <div
                  style={{
                      position: "absolute",
                      top: "40px",
                      left: "12px",
                      transform: "translateX(-12px)",
                  }}
              >
    <span
        style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "120px",
            height: "34px",
            padding: "0 1.2rem",
            fontFamily: CIRCULAR,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6E130E",
            border: "1.2px solid #A23A31",
            borderRadius: "999px",
            background: "#FDFAF7",
            whiteSpace: "nowrap",
        }}
    >
      60 Minutes
    </span>
              </div>

              {/* 60 DAYS */}
              <div
                  style={{
                      position: "absolute",
                      top: "40px",
                      left: "50%",
                      transform: "translateX(-50%)",
                  }}
              >
    <span
        style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "120px",
            height: "34px",
            padding: "0 1.2rem",
            fontFamily: CIRCULAR,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6E130E",
            border: "1.2px solid #A23A31",
            borderRadius: "999px",
            background: "#FDFAF7",
            whiteSpace: "nowrap",
        }}
    >
      60 Days
    </span>
              </div>
          

          <div style={{height: "3rem"}}/>
        </div>

      </div>

      <style>{`
        .prod-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
        @media (max-width: 900px) { .prod-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .prod-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}