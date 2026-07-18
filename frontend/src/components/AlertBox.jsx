

// import { COLORS, RADIUS, SHADOW } from "../theme";

// function AlertBox({ message, color }) {
//   const bg =
//     color === "red"
//       ? "rgba(239,68,68,.15)"
//       : color === "orange"
//       ? "rgba(245,158,11,.15)"
//       : "rgba(34,197,94,.15)";

//   return (
//     <div
//       style={{
//         background: bg,
//         border: `2px solid ${color}`,
//         borderRadius: RADIUS.card,
//         padding: "22px 28px",
//         marginBottom: "25px",
//         boxShadow: SHADOW,
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         animation:
//           color === "red"
//             ? "pulse 1.5s infinite"
//             : "none",
//       }}
//     >
//       <div>
//         <div
//           style={{
//             color: COLORS.textSecondary,
//             fontSize: "13px",
//             textTransform: "uppercase",
//             letterSpacing: "1px",
//           }}
//         >
//           Plant Alert Status
//         </div>

//         <h2
//           style={{
//             marginTop: "8px",
//             marginBottom: 0,
//             color,
//           }}
//         >
//           {message}
//         </h2>
//       </div>

//       <div
//         style={{
//           textAlign: "right",
//         }}
//       >
//         <div
//           style={{
//             width: "18px",
//             height: "18px",
//             borderRadius: "50%",
//             background: color,
//             marginLeft: "auto",
//             boxShadow: `0 0 18px ${color}`,
//           }}
//         />

//         <div
//           style={{
//             marginTop: "10px",
//             color: COLORS.textSecondary,
//             fontSize: "13px",
//           }}
//         >
//           LIVE
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AlertBox;


import { COLORS, RADIUS, SHADOW } from "../theme";

function AlertBox({ message, color }) {
  const isCritical = color === "red";

  const bg = isCritical
    ? "rgba(239,68,68,.15)"
    : color === "orange"
    ? "rgba(245,158,11,.15)"
    : "rgba(34,197,94,.15)";

  return (
    <>
      <style>
        {`
          @keyframes pulseAlert{
            0%{transform:scale(1);}
            50%{transform:scale(1.01);}
            100%{transform:scale(1);}
          }
        `}
      </style>

      <div
        style={{
          background: bg,
          border: `2px solid ${color}`,
          borderRadius: RADIUS.card,
          padding: "22px 24px",
          marginBottom: "24px",
          boxShadow: SHADOW,
          animation: isCritical
            ? "pulseAlert 1.8s infinite"
            : "none",
        }}
      >
        {/* Header */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <div>
            <div
              style={{
                color: COLORS.textSecondary,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 600,
              }}
            >
              Plant Alert Status
            </div>

            <h2
              style={{
                marginTop: "8px",
                marginBottom: 0,
                color,
                fontSize: "28px",
              }}
            >
              {message}
            </h2>
          </div>

          <div
            style={{
              padding: "6px 14px",
              borderRadius: "999px",
              background: color,
              color: "#fff",
              fontWeight: 700,
              fontSize: "12px",
            }}
          >
            ● LIVE
          </div>
        </div>

        {/* Divider */}

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,.08)",
            margin: "20px 0",
          }}
        />

        {/* Status Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(160px,1fr))",
            gap: "16px",
          }}
        >
          <InfoCard
            title="Status"
            value={isCritical ? "Emergency" : "Normal"}
          />

          <InfoCard
            title="Response"
            value="AI Monitoring Active"
          />

          <InfoCard
            title="Action"
            value="Notify Supervisor"
          />

          <InfoCard
            title="Priority"
            value={isCritical ? "HIGH" : "LOW"}
          />
        </div>
      </div>
    </>
  );
}

function InfoCard({ title, value }) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "10px",
        padding: "14px",
      }}
    >
      <div
        style={{
          color: COLORS.textSecondary,
          fontSize: "12px",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#fff",
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default AlertBox;