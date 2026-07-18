function WorkerStatus({ worker }) {
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
      <h2>👷 Worker Status</h2>

      <p><b>Name:</b> {worker.name}</p>

      <p><b>Zone:</b> {worker.zone}</p>

      <p><b>Status:</b> {worker.status}</p>
    </div>
  );
}

export default WorkerStatus;