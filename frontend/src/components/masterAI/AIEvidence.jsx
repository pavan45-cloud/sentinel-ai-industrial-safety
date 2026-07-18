// import GlassPanel from "../ui/GlassPanel";
// import SectionTitle from "../ui/SectionTitle";

// function Row({ label, value }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "12px 0",
//         borderBottom: "1px solid #1f2937",
//       }}
//     >
//       <span>{label}</span>
//       <strong>{value}</strong>
//     </div>
//   );
// }

// function AIEvidence({ evidence }) {
//   return (
//     <GlassPanel style={{ marginBottom: "20px" }}>
//       <SectionTitle
//         title="📊 AI Evidence"
//         subtitle="Sensor evidence used by AI"
//       />

//       <Row label="Gas" value={`${evidence.Gas} ppm`} />
//       <Row
//         label="Temperature"
//         value={`${evidence.Temperature} °C`}
//       />
//       <Row
//         label="Pressure"
//         value={`${evidence.Pressure} kPa`}
//       />
//       <Row
//         label="Hot Work"
//         value={evidence["Hot Work"] ? "YES" : "NO"}
//       />
//     </GlassPanel>
//   );
// }

// export default AIEvidence;

import GlassPanel from "../ui/GlassPanel";
import SectionTitle from "../ui/SectionTitle";

function Row({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 16px",
        background: "#111827",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <span
        style={{
          color: "#9CA3AF",
          fontWeight: 600,
        }}
      >
        {label}
      </span>

      <span
        style={{
          color: "white",
          fontWeight: 700,
          background: "#1e293b",
          padding: "4px 10px",
          borderRadius: "999px",
          fontSize: "13px",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function AIEvidence({ evidence }) {
  return (
    <GlassPanel style={{ marginBottom: "20px" }}>
      <SectionTitle
        title="📊 AI Evidence"
        subtitle="Sensor evidence analyzed before making the final decision"
      />

      <Row label="Gas Concentration" value={`${evidence.Gas} ppm`} />

      <Row
        label="Temperature"
        value={`${evidence.Temperature} °C`}
      />

      <Row
        label="Pressure"
        value={`${evidence.Pressure} kPa`}
      />

      <Row
        label="Hot Work Permit"
        value={evidence["Hot Work"] ? "YES" : "NO"}
      />
    </GlassPanel>
  );
}

export default AIEvidence;