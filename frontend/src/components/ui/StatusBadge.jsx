function StatusBadge({ status }) {
  let color = "#22c55e";

  if (status === "Medium")
    color = "#f59e0b";

  if (status === "High")
    color = "#ef4444";

  return (
    <span
      style={{
        background: color,
        color: "white",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;