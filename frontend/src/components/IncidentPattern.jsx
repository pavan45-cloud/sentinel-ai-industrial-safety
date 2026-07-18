// function IncidentPattern({ sensor }) {

//   let incident = "No previous incident matched.";
//   let color = "#22c55e";

//   if (
//     sensor.gas > 70 &&
//     sensor.temperature > 55
//   ) {

//     color = "#ef4444";

//     incident =
//       "⚠ Similar to Visakhapatnam Steel Plant Coke Oven Gas Explosion (2025). High gas concentration during hot work can lead to explosion.";
//   }

//   else if (
//     sensor.pressure > 130
//   ) {

//     color = "#f59e0b";

//     incident =
//       "⚠ Similar to historical pressure vessel failures in heavy industries.";
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

//       <h2>📚 Incident Pattern Intelligence</h2>

//       <p style={{color}}>
//         {incident}
//       </p>

//     </div>

//   );

// }

// export default IncidentPattern;


function IncidentPattern({ sensor }) {

  const incidents = [];

  // ------------------------
  // Gas Explosion
  // ------------------------

  if (sensor.gas > 70 && sensor.temperature > 55) {

    incidents.push({
      title: "Visakhapatnam Steel Plant (2025)",
      risk: "CRITICAL",
      color: "#dc2626",
      reason:
        "Gas accumulation + elevated temperature resembles the coke oven explosion that killed eight workers.",
      recommendation:
        "Immediately stop hot work, isolate gas supply and evacuate workers."
    });

  }

  // ------------------------
  // Pressure Vessel
  // ------------------------

  if (sensor.pressure > 130) {

    incidents.push({

      title: "Pressure Vessel Failure",

      risk: "HIGH",

      color: "#ea580c",

      reason:
        "Abnormal pressure resembles historical pressure vessel failures in heavy industries.",

      recommendation:
        "Reduce operating pressure and inspect relief valves."

    });

  }

  // ------------------------
  // Fire Hazard
  // ------------------------

  if (sensor.temperature > 60) {

    incidents.push({

      title: "Industrial Fire Incident",

      risk: "HIGH",

      color: "#f97316",

      reason:
        "High furnace temperature may trigger equipment fire.",

      recommendation:
        "Cool furnace and inspect thermal sensors."

    });

  }

  // ------------------------
  // Normal
  // ------------------------

  if (incidents.length === 0) {

    incidents.push({

      title: "No Matching Historical Incident",

      risk: "SAFE",

      color: "#16a34a",

      reason:
        "Current operating conditions appear normal.",

      recommendation:
        "Continue monitoring plant."

    });

  }

  return (

    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px"
      }}
    >

      <h2>📚 Incident Pattern Intelligence</h2>

      <p style={{ opacity: .7 }}>
        AI compares live sensor data with historical industrial accidents
      </p>

      {

        incidents.map((item, index) => (

          <div

            key={index}

            style={{

              background: "#111827",

              marginTop: "15px",

              padding: "15px",

              borderLeft: `6px solid ${item.color}`,

              borderRadius: "8px"

            }}

          >

            <h3>{item.title}</h3>

            <h4 style={{ color: item.color }}>

              {item.risk}

            </h4>

            <p>

              <b>Pattern Match:</b>

              {item.reason}

            </p>

            <p>

              <b>AI Recommendation:</b>

              {item.recommendation}

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default IncidentPattern;