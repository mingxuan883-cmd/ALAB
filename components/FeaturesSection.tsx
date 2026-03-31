"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const LIME = "#c8da32";

const stages = [
  {
    label: "60 MINUTES",
    title: "Fast\nBloat Relief",
    desc: "Helps relieve occasional bloating and supports digestive comfort by improving the breakdown of carbohydrates, fats, proteins, and lactose.",
    img: "/images/features/stage1.png",
  },
  {
    label: "7 DAYS",
    title: "More Consistent\nDigestion",
    desc: "As your gut begins to stabilize, digestion feels smoother and more predictable, with less frequent bloating.",
    img: "/images/features/stage4.png",
  },
  {
    label: "30 DAYS",
    title: "A Balanced\nGut Ecosystem",
    desc: "Maintains healthy gut flora balance by supporting beneficial bacteria and improving overall gut health.",
    img: "/images/features/stage2.png",
  },
  {
    label: "60 DAYS",
    title: "Metabolic Balance,\nNaturally",
    desc: "By modulating the gut microbiota over time, GutGlo™ supports long-term digestive resilience and healthy weight management.",
    img: "/images/features/stage5.png",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(1);
  const cardSwiperRef     = useRef<SwiperType | null>(null);
  const timelineSwiperRef = useRef<SwiperType | null>(null);

  // Keep both Swipers in sync when active changes from any source
  useEffect(() => {
    cardSwiperRef.current?.slideTo(active, 400);
    timelineSwiperRef.current?.slideTo(active, 400);
  }, [active]);

  return (
    <section style={{ backgroundColor: "var(--wine-deep)", padding: "6rem 2rem 5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "'PP Fragment Glare', serif", fontWeight: 400,
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            color: "var(--white)", lineHeight: 1.2, marginBottom: "1.25rem",
          }}>
            Designed For<br />
            Immediate Comfort &amp;<br />
            Built To Last
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.88rem",
            color: "rgba(255,255,255,1)", maxWidth: "480px",
            margin: "0 auto", lineHeight: 1.75,
          }}>
            From 60-minute relief to 60-day renewal —<br />
            GutGlo™ works in stages to restore comfort and long-term gut balance
          </p>
        </div>

        {/* ── Stage cards — Swiper (desktop shows all 4; swipe on mobile) ── */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={0}
          allowTouchMove
          initialSlide={active}
          onSwiper={sw => { cardSwiperRef.current = sw; }}
          onSlideChange={sw => setActive(sw.activeIndex)}
          breakpoints={{
            0:   { slidesPerView: 1 },
            560: { slidesPerView: 2 },
            900: { slidesPerView: 4 },
          }}
          style={{ overflow: "visible" }}
        >
          {stages.map((s, i) => {
            const isActive = i === active;
            return (
              <SwiperSlide key={s.label}>
                <div
                  onClick={() => setActive(i)}
                  style={{
                    cursor: "pointer",
                    padding: "2rem 2.5rem 2rem",
                    borderRight: i < stages.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    transition: "opacity 0.3s ease",
                    opacity: isActive ? 1 : 0.45,
                    position: "relative",
                    overflow: "hidden",
                    height: "380px",
                  }}
                >
                  {/* Background icon */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    pointerEvents: "none",
                  }}>
                    <Image
                      src={s.img} alt="" width={210} height={210}
                      style={{
                        objectFit: "contain",
                        opacity: isActive ? 0.22 : 0.1,
                        filter: isActive
                          ? "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(30deg)"
                          : "brightness(0) invert(1)",
                        transition: "opacity 0.3s ease, filter 0.3s ease",
                      }}
                    />
                  </div>

                  {/* Text — fixed top offset so all cards' titles align on same line */}
                  <div style={{ position: "absolute", top: "210px", left: "2rem", right: "2rem", zIndex: 1 }}>
                    <h3 style={{
                      fontFamily: "'Circular Std', sans-serif", fontWeight: 400,
                      fontSize: "1.8rem",
                      color: isActive ? "#D7FF9B" : "#6E613F",
                      lineHeight: 1.25, marginBottom: "0.9rem",
                      whiteSpace: "pre-line", transition: "color 0.3s ease",
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.78rem",
                      color: isActive ? "rgba(255,255,255,1)" : "rgba(220,200,170,0.6)",
                      lineHeight: 1.7, fontWeight: isActive ? 500 : 400,
                      transition: "color 0.3s ease",
                    }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ── Timeline axis — Swiper ── */}
        <div style={{ position: "relative", marginTop: "2rem" }}>

          {/* Static background line */}
          <div style={{
            position: "absolute", top: "11px",
            left: "calc(12.5%)", right: "calc(12.5%)",
            height: "1px", backgroundColor: "rgba(255,255,255,0.3)", zIndex: 0,
          }} />
          {/* Lime progress fill */}
          <div style={{
            position: "absolute", top: "11px",
            left: "calc(12.5%)",
            width: `calc(${(active / (stages.length - 1)) * 75}%)`,
            height: "1px", backgroundColor: "#D7FF9B",
            transition: "width 0.4s ease", zIndex: 0,border: "2px solid #D7FF9B",
          }} />

          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            allowTouchMove
            initialSlide={active}
            onSwiper={sw => { timelineSwiperRef.current = sw; }}
            onSlideChange={sw => setActive(sw.activeIndex)}
            breakpoints={{
              0:   { slidesPerView: 2 },
              560: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
            }}
            style={{ position: "relative", zIndex: 1 }}
          >
            {stages.map((s, i) => {
              const isActive = i === active;
              const isPast   = i < active;
              return (
                <SwiperSlide key={s.label}>
                  <div
                    onClick={() => setActive(i)}
                    style={{
                      display: "flex", flexDirection: "column",
                      alignItems: "center", gap: "1rem",
                      cursor: "pointer", paddingTop: 0,
                    }}
                  >
                    {/* Dot */}
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%",
                      border: `2px solid ${isActive || isPast ? LIME : "rgba(255,255,255,0.2)"}`,
                      backgroundColor: isActive
                        ? LIME
                        : isPast ? "rgba(200,218,50,0.25)" : "var(--wine-deep)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease", zIndex: 1,
                    }}>
                      {isActive && (
                        <div style={{
                          width: 8, height: 8, borderRadius: "50%",
                          backgroundColor: "var(--wine-deep)",
                        }} />
                      )}
                    </div>

                    {/* Label pill */}
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: "0.7rem",
                      fontWeight: 600, letterSpacing: "0.08em",
                      color: isActive ? "var(--wine-deep)" : "rgba(220,200,170,0.6)",
                      backgroundColor: isActive ? "#D7FF9B" : "rgba(255,255,255,0.07)",
                      padding: "0.5rem 1.5rem", borderRadius: "999px",
                      transition: "all 0.3s ease", whiteSpace: "nowrap",
                    }}>
                      {s.label}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}