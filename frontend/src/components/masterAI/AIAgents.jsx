// import GlassPanel from "../ui/GlassPanel";
// import SectionTitle from "../ui/SectionTitle";

// const icons = {
//   "Decision Agent": "🧠",
//   "PPE Detection Agent": "🦺",
//   "Incident Intelligence Agent": "📚",
//   "Compliance Agent": "📋",
//   "Master AI Coordinator": "🤖",
// };

// function AIAgents({ agents }) {
//   return (
//     <GlassPanel style={{ marginBottom: "20px" }}>
//       <SectionTitle
//         title="🤖 AI Intelligence Pipeline"
//         subtitle="How multiple AI agents collaborate before making the final safety decision"
//       />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "18px",
//         }}
//       >
//         {agents.map((agent, index) => (
//           <div key={index}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "14px",
//                 padding: "14px 18px",
//                 borderRadius: "14px",
//                 background: "#1e293b",
//                 border: "1px solid #334155",
//               }}
//             >
//               <div style={{ fontSize: "24px" }}>
//                 {icons[agent] || "⚙️"}
//               </div>

//               <div style={{ flex: 1 }}>
//                 <div
//                   style={{
//                     color: "#fff",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {agent}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: "13px",
//                     color: "#94a3b8",
//                     marginTop: "4px",
//                   }}
//                 >
//                   Executed successfully
//                 </div>
//               </div>

//               <div
//                 style={{
//                   padding: "4px 12px",
//                   borderRadius: "999px",
//                   background: "#16a34a",
//                   color: "white",
//                   fontSize: "12px",
//                 }}
//               >
//                 ACTIVE
//               </div>
//             </div>

//             {index !== agents.length - 1 && (
//               <div
//                 style={{
//                   textAlign: "center",
//                   fontSize: "24px",
//                   color: "#38bdf8",
//                   margin: "8px 0",
//                 }}
//               >
//                 ↓
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </GlassPanel>
//   );
// }

// export default AIAgents;

import GlassPanel from "../ui/GlassPanel";
import SectionTitle from "../ui/SectionTitle";

const icons = {
  "Decision Agent": "🧠",
  "PPE Detection Agent": "🦺",
  "Incident Intelligence Agent": "📚",
  "Compliance Agent": "📋",
  "Master AI Coordinator": "🤖",
};

function AIAgents({ agents }) {
  return (
    <GlassPanel style={{ marginBottom: "20px" }}>
      <SectionTitle
        title="🤖 AI Intelligence Pipeline"
        subtitle="How multiple AI agents collaborate before making the final safety decision"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {agents.map((agent, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 18px",
                borderRadius: "14px",
                background: "#1e293b",
                border: "1px solid #334155",
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
                  width: "54px",
                  height: "54px",
                  borderRadius: "12px",
                  background: "#0f172a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "26px",
                }}
              >
                {icons[agent] || "⚙️"}
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {agent}
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    color: "#94a3b8",
                    marginTop: "4px",
                  }}
                >
                  Executed successfully
                </div>
              </div>

              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#16a34a",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                ● ACTIVE
              </div>
            </div>

            {index !== agents.length - 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "8px 0",
                  fontSize: "22px",
                  color: "#38bdf8",
                }}
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}

export default AIAgents;