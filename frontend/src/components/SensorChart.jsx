// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// function SensorChart({ data }) {
//   return (
//     <div
//       style={{
//         background: "#1e293b",
//         padding: "20px",
//         marginTop: "25px",
//         borderRadius: "12px",
//         color: "white",
//         boxShadow: "0 0 10px rgba(0,0,0,0.4)",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>
//         📈 Live Sensor Monitoring
//       </h2>

//       <ResponsiveContainer width="100%" height={350}>
//         <LineChart data={data}>
//           <CartesianGrid stroke="#374151" />

//           <XAxis dataKey="time" stroke="white" />

//           <YAxis stroke="white" />

//           <Tooltip />

//           <Legend />

//           <Line
//             type="monotone"
//             dataKey="gas"
//             stroke="#ef4444"
//             strokeWidth={3}
//           />

//           <Line
//             type="monotone"
//             dataKey="temperature"
//             stroke="#22c55e"
//             strokeWidth={3}
//           />

//           <Line
//             type="monotone"
//             dataKey="pressure"
//             stroke="#3b82f6"
//             strokeWidth={3}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default SensorChart;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { COLORS, RADIUS, SHADOW } from "../theme";

function SensorChart({ data }) {
  return (
    <div
      style={{
        background: COLORS.panel,
        padding: "22px",
        marginTop: "25px",
        borderRadius: RADIUS.card,
        boxShadow: SHADOW,
        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "22px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: COLORS.text,
            }}
          >
            📈 Live Sensor Monitoring
          </h2>

          <div
            style={{
              marginTop: "6px",
              fontSize: "13px",
              color: COLORS.textSecondary,
            }}
          >
            Real-time Gas, Temperature & Pressure Trends
          </div>
        </div>

        <div
          style={{
            padding: "5px 12px",
            borderRadius: "999px",
            background: COLORS.success,
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          ● LIVE
        </div>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data}>
          <CartesianGrid
            stroke="#334155"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="time"
            stroke="#94A3B8"
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            stroke="#94A3B8"
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "10px",
              color: "#fff",
            }}
            labelStyle={{
              color: "#fff",
              fontWeight: 700,
            }}
          />

          <Legend
            wrapperStyle={{
              color: "#fff",
              paddingTop: "10px",
            }}
          />

          <Line
            type="monotone"
            dataKey="gas"
            name="Gas"
            stroke="#EF4444"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="temperature"
            name="Temperature"
            stroke="#22C55E"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="pressure"
            name="Pressure"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SensorChart;