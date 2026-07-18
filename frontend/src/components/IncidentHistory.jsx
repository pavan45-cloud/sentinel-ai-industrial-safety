// function IncidentHistory({ history }) {
//   return (
//     <div
//       style={{
//         background: "#1f2937",
//         color: "white",
//         padding: "20px",
//         borderRadius: "12px",
//         marginTop: "20px",
//       }}
//     >
//       <h2>📜 Incident History</h2>

//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//         }}
//       >
//         <thead>
//           <tr>
//             <th>Time</th>
//             <th>Gas</th>
//             <th>Temperature</th>
//             <th>Pressure</th>
//             <th>Risk</th>
//           </tr>
//         </thead>

//         <tbody>
//           {history.map((item, index) => {

//             let risk = "🟢 SAFE";
//             let color = "#22c55e";

//             if (item.gas > 70 || item.temperature > 55 || item.pressure > 130) {
//               risk = "🔴 HIGH";
//               color = "#ef4444";
//             }
//             else if (item.gas > 50 || item.temperature > 40) {
//               risk = "🟡 MEDIUM";
//               color = "#facc15";
//             }

//             return (
//               <tr
//                 key={index}
//                 style={{
//                   background: color,
//                   textAlign: "center",
//                 }}
//               >
//                 <td>{item.time}</td>
//                 <td>{item.gas}</td>
//                 <td>{item.temperature}</td>
//                 <td>{item.pressure}</td>
//                 <td>{risk}</td>
//               </tr>
//             );

//           })}
//         <F/tbody>
//       </table>
//     </div>F
//   );
// }

// export default IncidentHistory;

function IncidentHistory({ history }) {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "16px",
        borderRadius: "10px",
        marginTop: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        📜 Incident History
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          margin: "6px 0 14px",
        }}
      >
        Historical sensor readings and AI risk assessment
      </p>

      <div
        style={{
          maxHeight: "320px",
          overflowY: "auto",
          borderRadius: "8px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              position: "sticky",
              top: 0,
              background: "#111827",
              zIndex: 1,
            }}
          >
            <tr>
              <th style={headerStyle}>Time</th>
              <th style={headerStyle}>Gas</th>
              <th style={headerStyle}>Temp</th>
              <th style={headerStyle}>Pressure</th>
              <th style={headerStyle}>Risk</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, index) => {
              let risk = "🟢 SAFE";
              let color = "#22c55e";

              if (
                item.gas > 70 ||
                item.temperature > 55 ||
                item.pressure > 130
              ) {
                risk = "🔴 HIGH";
                color = "#ef4444";
              } else if (
                item.gas > 50 ||
                item.temperature > 40
              ) {
                risk = "🟡 MEDIUM";
                color = "#facc15";
              }

              return (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    background:
                      index % 2 === 0 ? "#111827" : "#1f2937",
                  }}
                >
                  <td style={cellStyle}>{item.time}</td>
                  <td style={cellStyle}>{item.gas}</td>
                  <td style={cellStyle}>{item.temperature}</td>
                  <td style={cellStyle}>{item.pressure}</td>

                  <td
                    style={{
                      ...cellStyle,
                      color,
                      fontWeight: "700",
                    }}
                  >
                    {risk}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const headerStyle = {
  padding: "10px",
  fontSize: "13px",
  color: "#CBD5E1",
  borderBottom: "1px solid #374151",
};

const cellStyle = {
  padding: "10px",
  fontSize: "13px",
  borderBottom: "1px solid #374151",
  color: "#E5E7EB",
};

export default IncidentHistory;