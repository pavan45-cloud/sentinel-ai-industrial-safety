// import { COLORS, RADIUS, SHADOW } from "../theme";

// function SensorCard({
//   title,
//   value,
//   unit,
//   icon,
// }) {
//   let status = "NORMAL";
//   let color = COLORS.success;

//   if (title.includes("Gas") && value > 70) {
//     status = "CRITICAL";
//     color = COLORS.danger;
//   } else if (title.includes("Temperature") && value > 55) {
//     status = "CRITICAL";
//     color = COLORS.danger;
//   } else if (title.includes("Pressure") && value > 130) {
//     status = "CRITICAL";
//     color = COLORS.danger;
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
//         e.currentTarget.style.boxShadow = `0 0 25px ${color}55`;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0px)";
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
//         <div>
//           <div
//             style={{
//               color: COLORS.textSecondary,
//               fontSize: "13px",
//               letterSpacing: "1px",
//               textTransform: "uppercase",
//             }}
//           >
//             {title}
//           </div>

//           <div
//             style={{
//               marginTop: "8px",
//               fontSize: "34px",
//               fontWeight: "700",
//               color: COLORS.text,
//             }}
//           >
//             {value}
//             <span
//               style={{
//                 fontSize: "16px",
//                 color: COLORS.textSecondary,
//                 marginLeft: "6px",
//               }}
//             >
//               {unit}
//             </span>
//           </div>
//         </div>

//         <div
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             background: `${color}22`,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "28px",
//             border: `1px solid ${color}`,
//           }}
//         >
//           {icon}
//         </div>
//       </div>

//       {/* Bottom */}

//       <div
//         style={{
//           marginTop: "22px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             color,
//             fontWeight: "bold",
//             fontSize: "14px",
//           }}
//         >
//           ● {status}
//         </div>

//         <div
//           style={{
//             color: COLORS.textSecondary,
//             fontSize: "13px",
//           }}
//         >
//           Live Sensor
//         </div>
//       </div>

//       {/* Progress */}

//       <div
//         style={{
//           marginTop: "14px",
//           height: "6px",
//           borderRadius: "10px",
//           background: "#1f2937",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             width: `${Math.min(value, 100)}%`,
//             height: "100%",
//             background: color,
//             transition: ".4s",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default SensorCard;



import { COLORS, RADIUS, SHADOW } from "../theme";

function SensorCard({
  title,
  value,
  unit,
  icon,
}) {
  let status = "NORMAL";
  let color = COLORS.success;

  if (title.includes("Gas") && value > 70) {
    status = "CRITICAL";
    color = COLORS.danger;
  } else if (title.includes("Temperature") && value > 55) {
    status = "CRITICAL";
    color = COLORS.danger;
  } else if (title.includes("Pressure") && value > 130) {
    status = "CRITICAL";
    color = COLORS.danger;
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
        e.currentTarget.style.boxShadow = `0 12px 30px ${color}33`;
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
          alignItems: "flex-start",
          marginBottom: "8px",
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
            {title}
          </div>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "34px",
                fontWeight: 700,
                color: COLORS.text,
                lineHeight: 1,
              }}
            >
              {value}
            </span>

            <span
              style={{
                fontSize: "15px",
                color: COLORS.textSecondary,
                marginBottom: "4px",
              }}
            >
              {unit}
            </span>
          </div>
        </div>

        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `${color}22`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            border: `1px solid ${color}`,
            boxShadow: `0 0 18px ${color}33`,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Bottom */}

      <div
        style={{
          marginTop: "22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "5px 12px",
            borderRadius: "999px",
            background: `${color}22`,
            color,
            fontWeight: 700,
            fontSize: "12px",
          }}
        >
          ● {status}
        </div>

        <div
          style={{
            color: COLORS.textSecondary,
            fontSize: "12px",
          }}
        >
          📡 Live Sensor
        </div>
      </div>

      {/* Progress */}

      <div
        style={{
          marginTop: "16px",
          height: "7px",
          borderRadius: "999px",
          background: "#1f2937",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.min(value, 100)}%`,
            height: "100%",
            background: color,
            borderRadius: "999px",
            transition: "width .4s ease",
          }}
        />
      </div>
    </div>
  );
}

export default SensorCard;