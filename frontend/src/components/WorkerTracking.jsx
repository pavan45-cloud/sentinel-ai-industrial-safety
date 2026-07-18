// function WorkerTracking({ sensor }) {

//   const workers = [
//     {
//       name: "Worker A",
//       zone: "Gas Zone",
//       safe: sensor.gas < 70,
//     },
//     {
//       name: "Worker B",
//       zone: "Boiler",
//       safe: sensor.temperature < 55,
//     },
//     {
//       name: "Worker C",
//       zone: "Storage",
//       safe: sensor.pressure < 130,
//     },
//   ];

//   return (
//     <div
//       style={{
//         background: "#1e293b",
//         padding: "20px",
//         marginTop: "25px",
//         borderRadius: "12px",
//         color: "white",
//       }}
//     >
//       <h2>👷 Live Worker Tracking</h2>

//       {workers.map((worker, index) => (
//         <div
//           key={index}
//           style={{
//             marginTop: "15px",
//             padding: "12px",
//             background: "#111827",
//             borderRadius: "8px",
//           }}
//         >
//           <h3>{worker.name}</h3>

//           <p>📍 {worker.zone}</p>

//           <p
//             style={{
//               color: worker.safe ? "#22c55e" : "#ef4444",
//               fontWeight: "bold",
//             }}
//           >
//             {worker.safe ? "🟢 SAFE" : "🔴 EVACUATE IMMEDIATELY"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default WorkerTracking;


import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function WorkerTracking({ sensor }) {
  const workers = [
    {
      id: "W-101",
      zone: "Boiler Area",
      status: sensor.gas > 70 ? "Evacuating" : "Working",
    },
    {
      id: "W-102",
      zone: "Chemical Tank",
      status: sensor.temperature > 55 ? "Warning" : "Working",
    },
    {
      id: "W-103",
      zone: "Control Room",
      status: "Safe",
    },
  ];

  return (
    <GlassPanel>
      <SectionTitle
        title="👷 Worker Tracking"
        subtitle="Real-time worker location & operational status"
      />

      {workers.map((worker) => {
        let color = "#22c55e";

        if (worker.status === "Warning")
          color = "#f59e0b";

        if (worker.status === "Evacuating")
          color = "#ef4444";

        return (
          <div
            key={worker.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
              background: "#111827",
              borderLeft: `5px solid ${color}`,
            }}
          >
            <div>
              <h4
                style={{
                  margin: 0,
                  color: "white",
                }}
              >
                {worker.id}
              </h4>

              <small
                style={{
                  color: "#9CA3AF",
                }}
              >
                {worker.zone}
              </small>
            </div>

            <div
              style={{
                color,
                fontWeight: "bold",
              }}
            >
              {worker.status}
            </div>
          </div>
        );
      })}
    </GlassPanel>
  );
}

export default WorkerTracking;