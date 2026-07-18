function PlantMap({ sensor }) {

  const getColor = (zone) => {

    if (sensor.gas > 70 && zone === "Boiler")
      return "#ef4444";

    if (sensor.temperature > 55 && zone === "Tank A")
      return "#f97316";

    if (sensor.pressure > 130 && zone === "Compressor")
      return "#eab308";

    return "#22c55e";
  };

  const Box = ({ name }) => (

    <div
      style={{
        background: getColor(name),
        width: "180px",
        height: "120px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        boxShadow: `0 0 25px ${getColor(name)}`,
      }}
    >
      {name}
    </div>

  );

  return (

    <div
      className="dashboard-card"
      style={{
        marginTop: "30px",
        padding: "25px",
      }}
    >

      <h2>🏭 Live Plant Safety Map</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
          marginTop: "30px",
        }}
      >

        <Box name="Boiler" />

        <Box name="Tank A" />

        <Box name="Control Room" />

        <Box name="Warehouse" />

        <Box name="Compressor" />

        <Box name="Loading Bay" />

      </div>

    </div>

  );

}

export default PlantMap;