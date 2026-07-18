import { jsPDF } from "jspdf";

function IncidentReport({ sensor, ppe }) {
  const downloadReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SentinelAI Incident Report", 20, 20);

    doc.setFontSize(12);

    doc.text(`Date : ${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Time : ${new Date().toLocaleTimeString()}`, 20, 50);

    doc.text(`Gas : ${sensor.gas} ppm`, 20, 70);
    doc.text(`Temperature : ${sensor.temperature} °C`, 20, 80);
    doc.text(`Pressure : ${sensor.pressure} kPa`, 20, 90);

    doc.text("PPE Status", 20, 110);

    doc.text(`Persons : ${ppe.Person}`, 20, 120);
    doc.text(`Hardhat : ${ppe.Hardhat}`, 20, 130);
    doc.text(`Vest : ${ppe["Safety Vest"]}`, 20, 140);
    doc.text(`Mask : ${ppe.Mask}`, 20, 150);

    doc.text("Violations", 20, 170);

    doc.text(`No Hardhat : ${ppe["NO-Hardhat"]}`, 20, 180);
    doc.text(`No Vest : ${ppe["NO-Safety Vest"]}`, 20, 190);
    doc.text(`No Mask : ${ppe["NO-Mask"]}`, 20, 200);

    doc.save("SentinelAI_Report.pdf");
  };

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
        📄 AI Incident Report
      </h2>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "13px",
          margin: "6px 0 16px",
          lineHeight: 1.5,
        }}
      >
        Generate a professional PDF containing sensor readings,
        PPE compliance, and incident evidence for audit and
        regulatory reporting.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Gas
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {sensor.gas} ppm
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Temperature
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {sensor.temperature}°C
          </div>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              color: "#94A3B8",
              fontSize: "12px",
            }}
          >
            Pressure
          </div>

          <div
            style={{
              marginTop: "4px",
              fontWeight: "600",
            }}
          >
            {sensor.pressure} kPa
          </div>
        </div>
      </div>

      <button
        onClick={downloadReport}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "15px",
          fontWeight: "600",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all .25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1d4ed8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#2563eb";
        }}
      >
        📄 Download PDF Report
      </button>
    </div>
  );
}

export default IncidentReport;