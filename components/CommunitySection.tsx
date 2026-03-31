"use client";
import Image from "next/image";

const cards = [
  { img: "/images/community/fruits.png",    alt: "Glow Fruits For Gut + Skin" },
  { img: "/images/community/decisions.png", alt: "We Share How Decisions Are Made" },
  { img: "/images/community/longterm.png",  alt: "Gut Health Deserves Long-Term Thinking" },
  { img: "/images/community/rhythm.png",    alt: "Daily Rhythm Shapes Gut Function" },
];

export default function CommunitySection() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "#6B1010";
    e.currentTarget.style.color = "#fff";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#6B1010";
  };
  return (
    <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0 5rem 20rem", overflow: "hidden" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "5rem",
      }}>

        {/* Left: heading + button */}
        <div style={{ flexShrink: 0, maxWidth: "300px" }}>
          <h2 style={{
            fontFamily: "PPFragment-GlareRegular",
            fontWeight: 400,
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            color: "#6B1010",
            lineHeight: 1.2,
            marginBottom: "2rem",
          }}>
            Join Us Inside the<br />World of Glodae —
          </h2>
          <a href="#" style={{
            display: "inline-block",
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6B1010",
            border: "1.5px solid #6B1010",
            borderRadius: "999px",
            padding: "0.65rem 1.5rem",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            Join Our Community
          </a>
        </div>

        {/* Right: horizontally scrolling card strip */}
        <div style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          paddingRight: "4rem",
          paddingBottom: "4px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          flex: 1,
        }} className="community-strip">
          {cards.map((c) => (
            <div key={c.img} style={{
              flexShrink: 0,
              width: "240px",
              height: "340px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}>
              <Image
                src={c.img}
                alt={c.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
          {/* Partial peek of next card */}
          <div style={{
            flexShrink: 0,
            width: "120px",
            height: "340px",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          }}>
            <Image
              src={cards[0].img}
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "left center" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .community-strip::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .community-strip { padding-right: 2rem !important; }
        }
      `}</style>
    </section>
  );
}