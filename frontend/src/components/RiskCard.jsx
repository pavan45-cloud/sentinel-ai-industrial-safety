// import { COLORS, RADIUS, SHADOW } from "../theme";

// function RiskCard({ risk, color }) {
//   let description = "Plant operating safely";
//   let icon = "🟢";

//   if (risk.includes("Medium")) {
//     description = "Attention required";
//     icon = "🟡";
//   }

//   if (risk.includes("High")) {
//     description = "Immediate action required";
//     icon = "🔴";
//   }

//   return (
//     <div
//       style={{
//         background: COLORS.panel,
//         borderRadius: RADIUS.card,
//         padding: "22px",
//         border: `1px solid ${color}55`,
//         boxShadow: SHADOW,
//         transition: ".3s",
//         cursor: "pointer",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "translateY(-6px)";
//         e.currentTarget.style.boxShadow = `0 0 30px ${color}55`;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0)";
//         e.currentTarget.style.boxShadow = SHADOW;
//       }}
//     >
//       {/* Header */}

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             color: COLORS.textSecondary,
//             fontSize: "13px",
//             letterSpacing: "1px",
//             textTransform: "uppercase",
//           }}
//         >
//           AI Risk Assessment
//         </div>

//         <div
//           style={{
//             width: 55,
//             height: 55,
//             borderRadius: "50%",
//             background: `${color}22`,
//             border: `1px solid ${color}`,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "28px",
//           }}
//         >
//           ⚠️
//         </div>
//       </div>

//       {/* Risk */}

//       <div
//         style={{
//           marginTop: "20px",
//           fontSize: "34px",
//           fontWeight: "700",
//           color,
//         }}
//       >
//         {risk}
//       </div>

//       {/* Status */}

//       <div
//         style={{
//           marginTop: "8px",
//           color: COLORS.text,
//           fontWeight: "600",
//           fontSize: "15px",
//         }}
//       >
//         {icon} {description}
//       </div>

//       {/* Confidence */}

//       <div
//         style={{
//           marginTop: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "8px",
//             color: COLORS.textSecondary,
//             fontSize: "13px",
//           }}
//         >
//           <span>AI Confidence</span>
//           <span>98%</span>
//         </div>

//         <div
//           style={{
//             height: "6px",
//             background: "#1f2937",
//             borderRadius: "10px",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               width: "98%",
//               height: "100%",
//               background: color,
//             }}
//           />
//         </div>
//       </div>

//       {/* Footer */}

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "20px",
//           color: COLORS.textSecondary,
//           fontSize: "13px",
//         }}
//       >
//         <span>Master AI Engine</span>
//         <span>Live Analysis</span>
//       </div>
//     </div>
//   );
// }

// export default RiskCard;


import { COLORS, RADIUS, SHADOW } from "../theme";

function RiskCard({ risk, color }) {
  let description = "Plant operating safely";
  let icon = "🟢";

  if (risk.includes("Medium")) {
    description = "Attention required";
    icon = "🟡";
  }

  if (risk.includes("High")) {
    description = "Immediate action required";
    icon = "🔴";
  }

  return (
    <div
      style={{
        background: COLORS.panel,
        borderRadius: RADIUS.card,
        padding: "22px",
        border: `1px solid ${color}55`,
        boxShadow: SHADOW,
        transition: "all .3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 12px 35px ${color}33`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = SHADOW;
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            AI Risk Assessment
          </div>

          <div
            style={{
              marginTop: "6px",
              color: COLORS.textSecondary,
              fontSize: "12px",
            }}
          >
            Live Industrial Analysis
          </div>
        </div>

        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `${color}22`,
            border: `1px solid ${color}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            boxShadow: `0 0 18px ${color}33`,
          }}
        >
          ⚠️
        </div>
      </div>

      {/* Risk */}

      <div
        style={{
          marginTop: "20px",
          fontSize: "34px",
          fontWeight: 800,
          color,
          lineHeight: 1.1,
        }}
      >
        {risk}
      </div>

      {/* Status */}

      <div
        style={{
          marginTop: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 12px",
          borderRadius: "999px",
          background: `${color}22`,
          color,
          fontWeight: 700,
          fontSize: "13px",
        }}
      >
        <span>{icon}</span>
        <span>{description}</span>
      </div>

      {/* Confidence */}

      <div
        style={{
          marginTop: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            color: COLORS.textSecondary,
            fontSize: "13px",
          }}
        >
          <span>AI Confidence</span>
          <span
            style={{
              color: COLORS.text,
              fontWeight: 700,
            }}
          >
            98%
          </span>
        </div>

        <div
          style={{
            height: "7px",
            background: "#1f2937",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "98%",
              height: "100%",
              background: color,
              borderRadius: "999px",
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          color: COLORS.textSecondary,
          fontSize: "12px",
        }}
      >
        <span>🤖 Master AI Engine</span>
        <span>● Live Analysis</span>
      </div>
    </div>
  );
}

export default RiskCard;