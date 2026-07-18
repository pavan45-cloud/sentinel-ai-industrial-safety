// import GlassPanel from "../ui/GlassPanel";
// import SectionTitle from "../ui/SectionTitle";

// function EmergencyTeams({ emergency }) {
//   return (
//     <GlassPanel style={{ marginBottom: "20px" }}>
//       <SectionTitle
//         title="🚑 Emergency Response"
//         subtitle="Teams and actions activated automatically"
//       />

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "20px",
//         }}
//       >
//         <div>
//           <h3 style={{ color: "#22c55e" }}>
//             Activated Teams
//           </h3>

//           {emergency.teams.map((team, index) => (
//             <div
//               key={index}
//               style={{
//                 padding: "10px",
//                 marginBottom: "10px",
//                 background: "#1f2937",
//                 borderRadius: "8px",
//               }}
//             >
//               🚑 {team}
//             </div>
//           ))}
//         </div>

//         <div>
//           <h3 style={{ color: "#ef4444" }}>
//             Emergency Actions
//           </h3>

//           {emergency.actions.map((action, index) => (
//             <div
//               key={index}
//               style={{
//                 padding: "10px",
//                 marginBottom: "10px",
//                 background: "#1f2937",
//                 borderRadius: "8px",
//               }}
//             >
//               🚨 {action}
//             </div>
//           ))}
//         </div>
//       </div>
//     </GlassPanel>
//   );
// }

// export default EmergencyTeams;

import GlassPanel from "../ui/GlassPanel";
import SectionTitle from "../ui/SectionTitle";

function Card({ title, color, icon, items }) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "14px",
        padding: "18px",
        border: `1px solid ${color}40`,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "18px",
          color,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ fontSize: "22px" }}>{icon}</span>
        {title}
      </h3>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#1f2937",
              borderRadius: "10px",
              padding: "14px",
              transition: "all .25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0,0,0,.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              {icon}
            </span>

            <span
              style={{
                color: "white",
                lineHeight: 1.5,
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmergencyTeams({ emergency }) {
  return (
    <GlassPanel style={{ marginBottom: "20px" }}>
      <SectionTitle
        title="🚑 Emergency Response"
        subtitle="Teams and actions activated automatically"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Activated Teams"
          color="#22c55e"
          icon="🚑"
          items={emergency.teams}
        />

        <Card
          title="Emergency Actions"
          color="#ef4444"
          icon="🚨"
          items={emergency.actions}
        />
      </div>
    </GlassPanel>
  );
}

export default EmergencyTeams;