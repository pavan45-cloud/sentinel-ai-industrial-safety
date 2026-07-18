// function DashboardCard({ title, icon, children }) {
//   return (
//     <div
//       style={{
//         background: "#111827",
//         border: "1px solid rgba(255,255,255,0.08)",
//         borderRadius: "16px",
//         padding: "20px",
//         boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
//         transition: "0.3s",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "16px",
//           borderBottom: "1px solid rgba(255,255,255,0.08)",
//           paddingBottom: "10px",
//         }}
//       >
//         <span
//           style={{
//             fontSize: "24px",
//             marginRight: "10px",
//           }}
//         >
//           {icon}
//         </span>

//         <h3
//           style={{
//             margin: 0,
//             color: "white",
//             fontSize: "20px",
//             fontWeight: 700,
//           }}
//         >
//           {title}
//         </h3>
//       </div>

//       {children}
//     </div>
//   );
// }

// export default DashboardCard;

function DashboardCard({
  title,
  icon,
  children,
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#111827,#1f2937)",
        borderRadius: "18px",
        padding: "22px",
        border: "1px solid rgba(255,255,255,.08)",
        boxShadow:
          "0 15px 40px rgba(0,0,0,.45)",
        transition: ".3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "18px",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            color: "white",
            margin: 0,
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
}

export default DashboardCard;