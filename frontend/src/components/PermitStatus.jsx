function PermitStatus({ permit }) {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>📄 Permit Intelligence</h2>

      <p><b>Permit:</b> {permit.type}</p>

      <p><b>Status:</b> {permit.status}</p>
    </div>
  );
}

export default PermitStatus;