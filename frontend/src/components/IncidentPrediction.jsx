function IncidentPrediction({ sensor }) {

  let probability = 10;

  if (sensor.gas > 50) probability += 10;
  if (sensor.gas > 70) probability += 20;
  if (sensor.gas > 90) probability += 20;

  if (sensor.temperature > 55) probability += 15;
  if (sensor.temperature > 70) probability += 10;

  if (sensor.pressure > 130) probability += 15;
  if (sensor.pressure > 150) probability += 10;

  if (probability > 100) probability = 100;

  const next30 = probability;
  const next60 = Math.min(100, probability + 15);
  const next120 = Math.min(100, probability + 30);

  let level = "LOW";
  let color = "#22c55e";
  let trend = "Stable";

  if (next120 >= 80) {
    level = "CRITICAL";
    color = "#dc2626";
    trend = "Rapidly Increasing";
  } else if (next120 >= 60) {
    level = "HIGH";
    color = "#ef4444";
    trend = "Increasing";
  } else if (next120 >= 30) {
    level = "MEDIUM";
    color = "#f59e0b";
    trend = "Moderate";
  }

  let actions = [];

  if (level === "CRITICAL") {
    actions = [
      "Evacuate Workers",
      "Stop Hot Work",
      "Activate Emergency Team"
    ];
  } else if (level === "HIGH") {
    actions = [
      "Reduce Gas Pressure",
      "Increase Ventilation",
      "Inspect Equipment"
    ];
  } else if (level === "MEDIUM") {
    actions = [
      "Increase Monitoring",
      "Inspect PPE",
      "Observe Sensors"
    ];
  } else {
    actions = [
      "Factory Operating Normally"
    ];
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "16px",
        borderRadius: "10px",
        color: "white"
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        ⚠ AI Incident Prediction
      </h2>
      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          marginTop: "-5px",
          marginBottom: "10px",
          lineHeight: 1.4,
        }}
      >
        AI forecast based on live sensor fusion and compound risk analysis.
      </p>

      <h1
        style={{
          color,
          margin: "8px 0",
          fontSize: "32px",
        }}
      >
        {level}
      </h1>

      <hr
        style={{
          border: 0,
          borderTop: "1px solid rgba(255,255,255,.08)",
          margin: "12px 0",
        }}
      />



      <ul
        style={{
          marginTop: "8px",
          paddingLeft: "18px",
          lineHeight: 1.5,
        }}
      >
        {actions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentPrediction;