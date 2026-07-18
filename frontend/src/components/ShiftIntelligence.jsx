// function ShiftIntelligence() {

//   const currentHour = new Date().getHours();

//   let status = "NORMAL";
//   let color = "#22c55e";
//   let message = "Shift operations are normal.";

//   if (
//     currentHour >= 6 &&
//     currentHour <= 7
//   ) {
//     status = "SHIFT CHANGE";
//     color = "#f59e0b";
//     message =
//       "Workers are changing shifts. AI recommends increased monitoring during handover.";
//   }

//   if (
//     currentHour >= 18 &&
//     currentHour <= 19
//   ) {
//     status = "HIGH RISK";
//     color = "#ef4444";
//     message =
//       "Evening shift change detected. Verify permits and worker attendance before starting operations.";
//   }

//   return (
//     <div
//       style={{
//         background:"#1f2937",
//         color:"white",
//         padding:"20px",
//         borderRadius:"12px",
//         marginTop:"20px"
//       }}
//     >
//       <h2>👷 Shift Intelligence Agent</h2>

//       <h1 style={{color}}>
//         {status}
//       </h1>

//       <p>{message}</p>

//     </div>
//   );
// }

// export default ShiftIntelligence;

import { useEffect, useState } from "react";

function ShiftIntelligence({ sensor }) {

  const [shift, setShift] = useState("");

  useEffect(() => {

    const hour = new Date().getHours();

    if (hour >= 6 && hour < 14)
      setShift("Morning Shift");

    else if (hour >= 14 && hour < 22)
      setShift("Evening Shift");

    else
      setShift("Night Shift");

  }, []);

  let risk = "LOW";
  let color = "#16a34a";
  let advice = "Normal operation.";

  if (shift === "Night Shift") {
    risk = "MEDIUM";
    color = "#eab308";
    advice =
      "Night shift fatigue may reduce worker attention. Increase supervision.";
  }

  if (
    sensor?.gas > 70 ||
    sensor?.temperature > 55 ||
    sensor?.pressure > 130
  ) {
    risk = "HIGH";
    color = "#dc2626";
    advice =
      "High sensor risk detected during this shift. Deploy emergency inspection team.";
  }

  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>🧠 Shift Intelligence</h2>

      <h3>{shift}</h3>

      <h2 style={{ color }}>
        Shift Risk : {risk}
      </h2>

      <p>
        <b>AI Analysis</b>
      </p>

      <p>{advice}</p>

      <hr />

      <ul>
        <li>👷 Worker Fatigue Monitoring</li>
        <li>🛡 Supervisor Availability</li>
        <li>⚙ Equipment Inspection Status</li>
        <li>📋 Permit Verification</li>
      </ul>
    </div>
  );
}

export default ShiftIntelligence;