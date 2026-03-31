"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

const ingredients = [
  { name: "Turmeric",     category: "Anti-Inflammatory Root",              img: "/images/ing-turmeric.png" },
  { name: "Milk Thistle", category: "Bioactive Botanical Blend",           img: "/images/ing-milk-thistle.png" },
  { name: "Bromelain",    category: "Protein-Digesting Enzyme",            img: "/images/ing-bromelain.png" },
  { name: "Pomegranate",  category: "Dual-Action Prebiotic + Postbiotic",  img: "/images/ing-pomegranate.png" },
  { name: "Ginger",       category: "Bioactive Botanical Blend",           img: "/images/ing-ginger.png" },
  { name: "Pineapple",    category: "Dual-Action Prebiotic + Postbiotic",  img: "/images/ing-pineapple.png" },
  { name: "Black Pepper", category: "Bioavailability Enhancer",            img: "/images/ing-blackpepper.png" },
  { name: "Fennel Seed",  category: "Digestive Botanical Blend",           img: "/images/ing-fennel.png" },
];

export default function IngredientsGrid() {
  const [activeIndex, setActiveIndex] = useState(3);
  const swiperRef    = useRef<SwiperType | null>(null);
  const lastIdxRef   = useRef(-1);   // debounce: only slideTo when index actually changes

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const swiper = swiperRef.current;
    if (!swiper?.slides?.length) return;

    let closest = swiper.activeIndex;
    let closestDist = Infinity;

    (swiper.slides as HTMLElement[]).forEach((el, i) => {
      const { left, width } = el.getBoundingClientRect();
      const dist = Math.abs(e.clientX - (left + width / 2));
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });

    if (closest !== lastIdxRef.current) {
      lastIdxRef.current = closest;
      swiper.slideTo(closest, 420);
    }
  };

  const handleMouseLeave = () => { lastIdxRef.current = -1; };

  return (
    <section style={{ backgroundColor: "#FDFAF7", padding: "6rem 0", overflowX: "hidden", overflowY: "visible" }}>

      {/* ── Header ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem 3rem" }}>
        <div className="ing-header"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", paddingLeft: "4rem" }}>
          <h2 style={{
            fontFamily: "PPFragment-GlareRegular", fontWeight: 250,
            fontSize: "clamp(2.2rem, 3.2vw, 2.6rem)", color: "#640D0D", lineHeight: 1.1,
          }}>
            8 Radically Transparent &amp;<br />Fully Traceable Ingredients
          </h2>
          <div style={{ marginRight: "120px" }}>
            <p style={{
              fontFamily: "PPFragment-GlareRegular", fontSize: "1.08rem",
              color: "#5A0C0C", lineHeight: 1.55, marginBottom: "1rem", maxWidth: "520px",
            }}>
              Every ingredient is traceable to its source and rigorously
              third-party tested for purity, potency, and safety.
            </p>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center",
              fontFamily: "PPFragment-GlareRegular", fontSize: "1rem",
              fontWeight: 700, textTransform: "uppercase", color: "#5A0C0C",
              textDecoration: "none", border: "1.5px solid rgba(90,12,12,1)",
              borderRadius: "999px", padding: "0.6rem 1.8rem",
            }}>
              VIEW ALL INGREDIENTS
            </a>
          </div>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ overflowX: "hidden", overflowY: "visible", cursor: "pointer" }}
      >
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          initialSlide={3}
          slidesPerView="auto"
          speed={420}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 120,
            modifier: 1.8,
            slideShadows: false,
          }}
          onSwiper={swiper => { swiperRef.current = swiper; }}
          onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          {ingredients.map((ing, i) => {
            const isActive = i === activeIndex;
            return (
              <SwiperSlide key={ing.name} style={{ width: 285 }}>
                <div style={{
                  width: 285, height: 440, borderRadius: 14, overflow: "hidden",
                  backgroundColor: isActive ? "#640D0D" : "#E6E3DD",
                  display: "flex", flexDirection: "column",
                  boxShadow: isActive
                    ? "0 10px 36px rgba(100,13,13,0.30)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "background-color 0.35s, box-shadow 0.35s",
                }}>
                  {/* Category */}
                  <div style={{ padding: "1.2rem 1rem 0.6rem", textAlign: "center" }}>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600,
                      letterSpacing: "0.09em", textTransform: "uppercase", lineHeight: 1.4,
                      margin: 0, transition: "color 0.35s",
                      color: isActive ? "rgba(255,255,255,0.65)" : "#640D0D",
                    }}>
                      {ing.category}
                    </p>
                  </div>
                  {/* Photo */}
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <img src={ing.img} alt={ing.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  {/* Name */}
                  <div style={{ padding: "0.8rem 1rem 1.1rem", textAlign: "center" }}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: "1.15rem",
                      fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.07em",
                      margin: 0, transition: "color 0.35s",
                      color: isActive ? "#ffffff" : "#640D0D",
                    }}>
                      {ing.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style>{`
        .swiper         { overflow: visible !important; }
        .swiper-wrapper { overflow: visible !important; align-items: center; }
        .swiper-slide   { overflow: visible !important; pointer-events: auto !important; }
        @media (max-width: 640px) { .ing-header { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}