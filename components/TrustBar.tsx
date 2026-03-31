import Image from "next/image";

const items = [
  { text: "INGREDIENT TRANSPARENCY", icon: "/images/features/INGREDIENT TRANSPARENCY.png" },
  { text: "THIRD PARTY LAB TESTED", icon: "/images/features/THIRD PARTY LAB TESTED.png" },
  { text: "BIOACTIVE INGREDIENTS", icon: "/images/features/BIOACTIVE INGREDIENTS.png" },
  { text: "GLUTEN FREE", icon: "/images/features/GLUTEN FREE.png" },
  { text: "NON-GMO", icon: "/images/features/NON-GMO.png" },
  { text: "MADE IN CANADA", icon: "/images/features/MADE IN CANADA.png" },
  { text: "ECO FRIENDLY PACKAGING", icon: "/images/features/ECO FRIENDLY PACKAGING.png" },
];

export default function TrustBar() {
  return (
    <div style={{
      backgroundColor: "#FFFFFF",
      padding: "0.8rem 0",
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
            display: "flex", alignItems: "center", gap: "0.6rem",
            whiteSpace: "nowrap",
          }}>
            <div style={{ width: "20px", height: "20px", position: "relative", flexShrink: 0 }}>
              <Image
                src={item.icon}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span style={{
              fontFamily: "'Circular Std', sans-serif", fontSize: "0.7rem",
              fontWeight: 700, letterSpacing: "0em",
              textTransform: "uppercase", color: "#712121",
            }}>{item.text}</span>
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