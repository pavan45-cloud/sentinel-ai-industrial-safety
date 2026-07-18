// import { useEffect, useState } from "react";

// function AlertTimeline({ sensor }) {

//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {

//     let message = "";

//     if (sensor.gas > 70)
//       message = "🚨 High Gas Concentration";

//     else if (sensor.temperature > 55)
//       message = "🔥 High Temperature";

//     else if (sensor.pressure > 130)
//       message = "⚠ High Pressure";

//     if (message !== "") {

//       setAlerts(prev => [

//         {
//           time: new Date().toLocaleTimeString(),
//           text: message
//         },

//         ...prev.slice(0,7)

//       ]);

//     }

//   }, [sensor]);

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

//       <h2>📜 AI Alert Timeline</h2>

//       {

//       alerts.length===0 ?

//       <p>No alerts yet.</p>

//       :

//       alerts.map((a,index)=>(

//         <div
//         key={index}
//         style={{
//           padding:"10px",
//           marginBottom:"10px",
//           background:"#374151",
//           borderLeft:"5px solid red"
//         }}
//         >

//         <b>{a.time}</b>

//         <br/>

//         {a.text}

//         </div>

//       ))

//       }

//     </div>

//   );

// }

// export default AlertTimeline;

import { useEffect, useState } from "react";

function AlertTimeline({ sensor }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    let message = "";

    if (sensor.gas > 70)
      message = "🚨 High Gas Concentration";
    else if (sensor.temperature > 55)
      message = "🔥 High Temperature";
    else if (sensor.pressure > 130)
      message = "⚠ High Pressure";

    if (message !== "") {
      setAlerts((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          text: message,
        },
        ...prev.slice(0, 7),
      ]);
    }
  }, [sensor]);

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
        📜 AI Alert Timeline
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          margin: "6px 0 14px",
        }}
      >
        Latest AI-generated safety events
      </p>

      <div
        style={{
          height: "300px",
          overflowY: "auto",
          paddingRight: "4px",
        }}
      >
        {alerts.length === 0 ? (
          <div
            style={{
              background: "#111827",
              borderRadius: "8px",
              padding: "14px",
              textAlign: "center",
              color: "#9CA3AF",
            }}
          >
            No alerts yet.
          </div>
        ) : (
          alerts.map((a, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                borderLeft: "4px solid #ef4444",
                borderRadius: "8px",
                padding: "10px 12px",
                marginBottom: "8px",
                transition: "all .25s ease",
              }}
            >
              <div
                style={{
                  color: "#94A3B8",
                  fontSize: "11px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                {a.time}
              </div>

              <div
                style={{
                  color: "#E5E7EB",
                  fontSize: "14px",
                  lineHeight: 1.4,
                }}
              >
                {a.text}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AlertTimeline;