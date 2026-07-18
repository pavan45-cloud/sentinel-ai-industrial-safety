// import { COLORS, RADIUS, SHADOW } from "../theme";

// function SafetyScore({ score }) {
//   let color = COLORS.success;
//   let status = "Excellent";

//   if (score < 80) {
//     color = COLORS.warning;
//     status = "Warning";
//   }

//   if (score < 50) {
//     color = COLORS.danger;
//     status = "Critical";
//   }

//   return (
//     <div
//       style={{
//         background: COLORS.panel,
//         borderRadius: RADIUS.card,
//         padding: "22px",
//         border: `1px solid ${color}55`,
//         boxShadow: SHADOW,
//         textAlign: "center",
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
//           color: COLORS.textSecondary,
//           textTransform: "uppercase",
//           fontSize: "13px",
//           letterSpacing: "1px",
//           marginBottom: "20px",
//         }}
//       >
//         AI Safety Score
//       </div>

//       {/* Circular Score */}

//       <div
//         style={{
//           width: 150,
//           height: 150,
//           margin: "0 auto",
//           borderRadius: "50%",
//           border: `8px solid ${color}`,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: `${color}11`,
//           boxShadow: `0 0 25px ${color}44`,
//         }}
//       >
//         <div>
//           <div
//             style={{
//               fontSize: "42px",
//               fontWeight: "700",
//               color,
//             }}
//           >
//             {score}%
//           </div>

//           <div
//             style={{
//               color: COLORS.textSecondary,
//               fontSize: "13px",
//             }}
//           >
//             Safety
//           </div>
//         </div>
//       </div>

//       {/* Status */}

//       <div
//         style={{
//           marginTop: "18px",
//           color,
//           fontWeight: "700",
//           fontSize: "15px",
//         }}
//       >
//         {status}
//       </div>

//       <div
//         style={{
//           color: COLORS.textSecondary,
//           marginTop: "6px",
//           fontSize: "14px",
//         }}
//       >
//         Overall Plant Health Index
//       </div>

//       {/* Progress */}

//       <div
//         style={{
//           marginTop: "20px",
//           height: "7px",
//           background: "#1f2937",
//           borderRadius: "20px",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             width: `${score}%`,
//             height: "100%",
//             background: color,
//             transition: ".5s",
//           }}
//         />
//       </div>

//       {/* Footer */}

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: "18px",
//           color: COLORS.textSecondary,
//           fontSize: "13px",
//         }}
//       >
//         <span>Master AI</span>
//         <span>Updated Live</span>
//       </div>
//     </div>
//   );
// }

// export default SafetyScore;


import { COLORS, RADIUS, SHADOW } from "../theme";

function SafetyScore({ score }) {
  let color = COLORS.success;
  let status = "Excellent";

  if (score < 80) {
    color = COLORS.warning;
    status = "Warning";
  }

  if (score < 50) {
    color = COLORS.danger;
    status = "Critical";
  }

  return (
    <div
      style={{
        background: COLORS.panel,
        borderRadius: RADIUS.card,
        padding: "22px",
        border: `1px solid ${color}55`,
        boxShadow: SHADOW,
        textAlign: "center",
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
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            color: COLORS.textSecondary,
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "1px",
            fontWeight: 600,
          }}
        >
          AI Safety Score
        </div>

        <div
          style={{
            padding: "4px 10px",
            borderRadius: "999px",
            background: color,
            color: "#fff",
            fontSize: "11px",
            fontWeight: 700,
          }}
        >
          LIVE
        </div>
      </div>

      {/* Circular Score */}

      <div
        style={{
          width: 150,
          height: 150,
          margin: "0 auto",
          borderRadius: "50%",
          border: `8px solid ${color}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `${color}11`,
          boxShadow: `0 0 30px ${color}44`,
        }}
      >
        <div>
          <div
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color,
              lineHeight: 1,
            }}
          >
            {score}%
          </div>

          <div
            style={{
              color: COLORS.textSecondary,
              fontSize: "13px",
              marginTop: "6px",
            }}
          >
            Safety
          </div>
        </div>
      </div>

      {/* Status */}

      <div
        style={{
          marginTop: "18px",
          color,
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        {status}
      </div>

      <div
        style={{
          color: COLORS.textSecondary,
          marginTop: "6px",
          fontSize: "14px",
          lineHeight: 1.5,
        }}
      >
        Overall Plant Health Index
      </div>

      {/* Progress */}

      <div
        style={{
          marginTop: "20px",
          height: "8px",
          background: "#1f2937",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: color,
            borderRadius: "999px",
            transition: "width .5s ease",
          }}
        />
      </div>

      {/* Footer */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "18px",
          color: COLORS.textSecondary,
          fontSize: "12px",
        }}
      >
        <span>🤖 Master AI</span>
        <span>● Updated Live</span>
      </div>
    </div>
  );
}

export default SafetyScore;