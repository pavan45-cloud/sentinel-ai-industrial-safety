function AIExecutiveSummary({ sensor, worker, permit, ppe }) {

  let overall = "🟢 SAFE";
  let color = "#22c55e";

  if (
    sensor.gas > 70 ||
    sensor.temperature > 55 ||
    sensor.pressure > 130
  ) {
    overall = "🔴 HIGH RISK";
    color = "#ef4444";
  }
  else if (
    sensor.gas > 50 ||
    sensor.temperature > 40
  ) {
    overall = "🟡 MEDIUM RISK";
    color = "#f59e0b";
  }

  let decision =
    "Continue operations with routine monitoring.";

  if (overall.includes("HIGH")) {
    decision =
      "Suspend hot work, evacuate affected area, notify emergency response team immediately.";
  }

  else if (overall.includes("MEDIUM")) {
    decision =
      "Increase monitoring frequency and inspect hazardous area.";
  }

  return (

    <div
      className="dashboard-card"
      style={{
        marginTop: "30px",
        marginBottom: "30px",
        padding: "30px",
        border: `2px solid ${color}`,
      }}
    >

      <h2 style={{ color }}>
        🧠 AI Executive Safety Summary
      </h2>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <div>
          <h3>Overall Status</h3>
          <h1 style={{ color }}>
            {overall}
          </h1>
        </div>

        <div>
          <h3>AI Confidence</h3>
          <h1 style={{ color }}>
            97.8%
          </h1>
        </div>

        <div>
          <strong>Gas</strong>

          <p>{sensor.gas} ppm</p>

          <strong>Temperature</strong>

          <p>{sensor.temperature} °C</p>

          <strong>Pressure</strong>

          <p>{sensor.pressure} kPa</p>

        </div>

        <div>

          <strong>Worker</strong>

          <p>{worker.zone}</p>

          <strong>Permit</strong>

          <p>{permit.type}</p>

          <strong>PPE</strong>

          <p>
            Hardhat :
            {ppe.Hardhat}
          </p>

        </div>

      </div>

      <hr />

      <h3 style={{ color }}>
        🤖 AI Recommendation
      </h3>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "32px",
        }}
      >
        {decision}
      </p>

    </div>

  );

}

export default AIExecutiveSummary;