// import GlassPanel from "../ui/GlassPanel";
// import SectionTitle from "../ui/SectionTitle";

// function AIRecommendations({ recommendations }) {
//   return (
//     <GlassPanel style={{ marginBottom: "20px" }}>
//       <SectionTitle
//         title="📋 AI Recommended Actions"
//         subtitle="Actions suggested by the AI Engine"
//       />

//       <div
//         style={{
//           display: "grid",
//           gap: "12px",
//         }}
//       >
//         {recommendations.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               padding: "14px 18px",
//               background: "#1f2937",
//               borderLeft: "4px solid #3b82f6",
//               borderRadius: "10px",
//               color: "white",
//             }}
//           >
//             🚨 {item}
//           </div>
//         ))}
//       </div>
//     </GlassPanel>
//   );
// }

// export default AIRecommendations;

import GlassPanel from "../ui/GlassPanel";
import SectionTitle from "../ui/SectionTitle";

function AIRecommendations({ recommendations }) {
  return (
    <GlassPanel style={{ marginBottom: "20px" }}>
      <SectionTitle
        title="📋 AI Recommended Actions"
        subtitle="Actions suggested by the AI Engine"
      />

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {recommendations.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px 18px",
              background: "#1f2937",
              borderLeft: "5px solid #3b82f6",
              borderRadius: "12px",
              color: "white",
              transition: "all .25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              🚨
            </div>

            <div
              style={{
                flex: 1,
                lineHeight: 1.5,
                fontSize: "14px",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

export default AIRecommendations;