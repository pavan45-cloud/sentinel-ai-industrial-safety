// function Recommendation({ sensor }) {
//   let recommendations = [];

//   const critical =
//     sensor.gas > 70 ||
//     sensor.temperature > 55 ||
//     sensor.pressure > 130;

//   const warning =
//     sensor.gas > 50 ||
//     sensor.temperature > 45 ||
//     sensor.pressure > 115;

//   if (critical) {
//     recommendations = [
//       "🛑 Suspend high-risk operations immediately",
//       "🚨 Evacuate affected personnel from Zone A",
//       "🔒 Isolate gas supply and activate emergency shutdown",
//       "📢 Notify Safety Officer and Emergency Response Team",
//       "📄 Generate incident report for compliance review",
//     ];
//   } else if (warning) {
//     recommendations = [
//       "⚠ Increase sensor monitoring frequency",
//       "👷 Inspect affected equipment and surrounding area",
//       "📋 Review active work permits before continuing operations",
//       "📡 Alert shift supervisor for precautionary monitoring",
//     ];
//   } else {
//     recommendations = [
//       "✅ Continue normal plant operations",
//       "📊 AI monitoring all sensors in real time",
//       "🛡 Preventive safety protocols remain active",
//     ];
//   }

//   return (
//     <div
//       style={{
//         marginTop: "30px",
//         padding: "20px",
//         background: "#1f2937",
//         borderRadius: "10px",
//         color: "white",
//       }}
//     >
//       <h2 style={{ marginBottom: "15px" }}>
//         🤖 AI Recommended Actions
//       </h2>

//       <ul>
//         {recommendations.map((item, index) => (
//           <li key={index} style={{ marginBottom: "10px" }}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Recommendation;

import { COLORS, RADIUS, SHADOW } from "../theme";

function Recommendation({ sensor }) {
  let recommendations = [];

  const critical =
    sensor.gas > 70 ||
    sensor.temperature > 55 ||
    sensor.pressure > 130;

  const warning =
    sensor.gas > 50 ||
    sensor.temperature > 45 ||
    sensor.pressure > 115;

  let borderColor = COLORS.success;
  let title = "🤖 AI Recommended Actions";

  if (critical) {
    borderColor = COLORS.danger;

    recommendations = [
      "🛑 Suspend high-risk operations immediately",
      "🚨 Evacuate affected personnel from Zone A",
      "🔒 Isolate gas supply and activate emergency shutdown",
      "📢 Notify Safety Officer and Emergency Response Team",
      "📄 Generate incident report for compliance review",
    ];
  } else if (warning) {
    borderColor = COLORS.warning;

    recommendations = [
      "⚠ Increase sensor monitoring frequency",
      "👷 Inspect affected equipment and surrounding area",
      "📋 Review active work permits before continuing operations",
      "📡 Alert shift supervisor for precautionary monitoring",
    ];
  } else {
    recommendations = [
      "✅ Continue normal plant operations",
      "📊 AI monitoring all sensors in real time",
      "🛡 Preventive safety protocols remain active",
    ];
  }

  return (
    <div
      style={{
        marginTop: "12px",
        padding: "16px",
        background: COLORS.panel,
        borderRadius: RADIUS.card,
        border: `1px solid ${borderColor}55`,
        boxShadow: SHADOW,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: COLORS.text,
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            padding: "4px 10px",
            borderRadius: "999px",
            background: borderColor,
            color: "#fff",
            fontSize: "11px",
            fontWeight: "700",
          }}
        >
          AI DECISION
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          minHeight: "220px",
          maxHeight: "220px",
          overflowY: "auto",
          paddingRight: "4px",
        }}
      >


        {recommendations.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              background: "#111827",
              borderLeft: `4px solid ${borderColor}`,
              borderRadius: "8px",
              transition: "all .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0px)";
            }}
          >
            <span
              style={{
                fontSize: "17px",
                flexShrink: 0,
              }}
            >
              {item.split(" ")[0]}
            </span>

            <span
              style={{
                color: COLORS.text,
                fontSize: "14px",
                lineHeight: 1.4,
              }}
            >
              {item.substring(item.indexOf(" ") + 1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;