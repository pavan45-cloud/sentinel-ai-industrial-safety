
function GeoSafetyHeatmap({ sensor, worker, permit, ppe }) {

  const zones = [

    {
      name: "🔥 Furnace",
      x: 0,
      y: 0,
      status:
        sensor.temperature > 60
          ? "CRITICAL"
          : sensor.temperature > 45
            ? "HIGH"
            : "SAFE"
    },

    {
      name: "☣ Gas Storage",
      x: 1,
      y: 0,
      status:
        sensor.gas > 70
          ? "CRITICAL"
          : sensor.gas > 50
            ? "HIGH"
            : "SAFE"
    },

    {
      name: "⚙ Compressor",
      x: 2,
      y: 0,
      status:
        sensor.pressure > 130
          ? "HIGH"
          : "SAFE"
    },

    {
      name: "👷 Worker",
      x: 0,
      y: 1,
      status: worker.zone
    },

    {
      name: "📋 Permit",
      x: 1,
      y: 1,
      status: permit.status
    },

    {
      name: "🏢 Control Room",
      x: 2,
      y: 1,
      status: "SAFE"
    },

    {
      name: "📦 Warehouse",
      x: 0,
      y: 2,
      status:
        sensor.gas > 60
          ? "MEDIUM"
          : "SAFE"
    },

    {
      name: "🚪 Emergency Exit",
      x: 1,
      y: 2,
      status: "READY"
    },

    {
      name: "🚑 Assembly Point",
      x: 2,
      y: 2,
      status: "SAFE"
    }

  ];

  const getColor = (status) => {

    if (status === "SAFE") return "#16a34a";

    if (status === "READY") return "#2563eb";

    if (status === "MEDIUM") return "#eab308";

    if (status === "HIGH") return "#ea580c";

    if (status === "CRITICAL") return "#dc2626";

    return "#475569";
  };

  return (

    <div
      style={{
        background: "#1e293b",
        padding: "18px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        color: "white",
        marginTop: "0px"
      }}
    >

      <h2
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        🗺 Geospatial Safety Heatmap
      </h2>

      <p
        style={{
          color: "#9CA3AF",
          marginTop: "6px",
          fontSize: "13px",
        }}
      >
        Live Plant Risk Visualization
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: "12px",
          marginTop: "20px"
        }}
      >

        {

          zones.map((zone, index) => (

            <div

              key={index}

              style={{
                background: getColor(zone.status),
                minHeight: "105px",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                transition: "all .25s ease",
                boxShadow: "0 6px 18px rgba(0,0,0,.25)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >

              <div
                style={{
                  fontSize: "17px",
                  textAlign: "center",
                  padding: "0 6px",
                }}
              >

                {zone.name}

              </div>

              <div
                style={{
                  marginTop: "10px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.18)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".5px",
                }}
              >
                {zone.status}
              </div>




            </div>

          ))

        }

      </div>

    </div>

  );

}

export default GeoSafetyHeatmap;