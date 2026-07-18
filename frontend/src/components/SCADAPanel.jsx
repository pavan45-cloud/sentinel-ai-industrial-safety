function SCADAPanel({ sensor }) {

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

      <h2>🏭 SCADA Live Monitoring</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >

        <thead>

          <tr>

            <th>Tag</th>
            <th>Value</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>
            <td>GAS-101</td>
            <td>{sensor.gas} ppm</td>
            <td>{sensor.gas > 70 ? "🔴 Alarm" : "🟢 Normal"}</td>
          </tr>

          <tr>
            <td>TEMP-201</td>
            <td>{sensor.temperature} °C</td>
            <td>{sensor.temperature > 55 ? "🔴 Alarm" : "🟢 Normal"}</td>
          </tr>

          <tr>
            <td>PRESS-301</td>
            <td>{sensor.pressure} kPa</td>
            <td>{sensor.pressure > 130 ? "🔴 Alarm" : "🟢 Normal"}</td>
          </tr>

        </tbody>

      </table>

    </div>
  );

}

export default SCADAPanel;