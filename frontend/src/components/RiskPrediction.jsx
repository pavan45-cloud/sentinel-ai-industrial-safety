function RiskPrediction({ sensor }) {

  let ten = "LOW";
  let twenty = "LOW";
  let thirty = "LOW";

  if (sensor.gas > 50) {
    ten = "MEDIUM";
    twenty = "HIGH";
    thirty = "CRITICAL";
  }

  if (sensor.gas > 70) {
    ten = "HIGH";
    twenty = "CRITICAL";
    thirty = "CRITICAL";
  }

  return (

    <div
      style={{
        background:"#1f2937",
        color:"white",
        padding:"20px",
        marginTop:"20px",
        borderRadius:"12px"
      }}
    >

      <h2>📈 AI Risk Prediction (Next 30 Minutes)</h2>

      <table
        style={{
          width:"100%",
          marginTop:"15px"
        }}
      >

        <tbody>

          <tr>
            <td>Current</td>
            <td>{sensor.gas > 70 ? "HIGH" : "NORMAL"}</td>
          </tr>

          <tr>
            <td>10 Minutes</td>
            <td>{ten}</td>
          </tr>

          <tr>
            <td>20 Minutes</td>
            <td>{twenty}</td>
          </tr>

          <tr>
            <td>30 Minutes</td>
            <td>{thirty}</td>
          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default RiskPrediction;