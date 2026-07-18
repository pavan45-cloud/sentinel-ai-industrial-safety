// import GlassPanel from "./ui/GlassPanel";
// import SectionTitle from "./ui/SectionTitle";

// function AIActionLog({ sensor }) {
//     const emergency =
//         sensor.gas > 70 ||
//         sensor.temperature > 55 ||
//         sensor.pressure > 130;
//     const actions = emergency
//         ? [
//             {
//                 text: "Gas isolation valve closed",
//                 status: "EXECUTED",
//                 color: "#ef4444",
//             },
//             {
//                 text: "Hot Work Permit suspended",
//                 status: "EXECUTED",
//                 color: "#f59e0b",
//             },
//             {
//                 text: "Safety Officer notified",
//                 status: "EXECUTED",
//                 color: "#3b82f6",
//             },
//             {
//                 text: "Emergency response team dispatched",
//                 status: "EXECUTED",
//                 color: "#ef4444",
//             },
//             {
//                 text: "Incident report generated",
//                 status: "EXECUTED",
//                 color: "#22c55e",
//             },
//             {
//                 text: "Sensor evidence archived",
//                 status: "EXECUTED",
//                 color: "#22c55e",
//             },
//         ]
//         : [
//             {
//                 text: "AI monitoring plant conditions",
//                 status: "COMPLETED",
//                 color: "#3b82f6",
//             },
//             {
//                 text: "Sensor health verified",
//                 status: "COMPLETED",
//                 color: "#22c55e",
//             },
//             {
//                 text: "Permit compliance checked",
//                 status: "COMPLETED",
//                 color: "#f59e0b",
//             },
//             {
//                 text: "Workers operating safely",
//                 status: "COMPLETED",
//                 color: "#22c55e",
//             },
//             {
//                 text: "No emergency action required",
//                 status: "COMPLETED",
//                 color: "#22c55e",
//             },
//         ];


//     return (
//         <GlassPanel>
//             <SectionTitle
//                 title="🤖 Autonomous Response Log"
//                 subtitle="Real-time actions executed automatically by SentinelAI"
//             />
//             <div
//                 style={{
//                     marginBottom: "16px",
//                     color: "#94A3B8",
//                     fontSize: "13px",
//                     textAlign: "center",
//                 }}
//             >
//                 ⚙ Today's Automation • {actions.length} Actions Executed
//             </div>


//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "10px",
//                 }}
//             >
//                 {actions.map((item, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             background: "#111827",
//                             borderLeft: `4px solid ${item.color}`,
//                             padding: "12px 16px",
//                             borderRadius: "10px",
//                         }}
//                     >
//                         <div>
//                             <span
//                                 style={{
//                                     background: item.color,
//                                     color: "white",
//                                     padding: "3px 8px",
//                                     borderRadius: "999px",
//                                     fontSize: "11px",
//                                     fontWeight: "bold",
//                                     marginRight: "10px",
//                                 }}
//                             >
//                                 {item.status}
//                             </span>

//                             <span style={{ color: "#E5E7EB" }}>
//                                 {item.text}
//                             </span>
//                         </div>

//                         <span
//                             style={{
//                                 color: "#94A3B8",
//                                 fontSize: "12px",
//                             }}
//                         >
//                             {new Date().toLocaleTimeString()}
//                         </span>
//                     </div>
//                 ))}

//             </div>
//         </GlassPanel>
//     );
// }

// export default AIActionLog;




import GlassPanel from "./ui/GlassPanel";
import SectionTitle from "./ui/SectionTitle";

function AIActionLog({ sensor }) {
    const emergency =
        sensor.gas > 70 ||
        sensor.temperature > 55 ||
        sensor.pressure > 130;

    const actions = emergency
        ? [
            {
                text: "Gas isolation valve closed",
                status: "EXECUTED",
                color: "#ef4444",
            },
            {
                text: "Hot Work Permit suspended",
                status: "EXECUTED",
                color: "#f59e0b",
            },
            {
                text: "Safety Officer notified",
                status: "EXECUTED",
                color: "#3b82f6",
            },
            {
                text: "Emergency response team dispatched",
                status: "EXECUTED",
                color: "#ef4444",
            },
            {
                text: "Incident report generated",
                status: "EXECUTED",
                color: "#22c55e",
            },
            {
                text: "Sensor evidence archived",
                status: "EXECUTED",
                color: "#22c55e",
            },
        ]
        : [
            {
                text: "AI monitoring plant conditions",
                status: "COMPLETED",
                color: "#3b82f6",
            },
            {
                text: "Sensor health verified",
                status: "COMPLETED",
                color: "#22c55e",
            },
            {
                text: "Permit compliance checked",
                status: "COMPLETED",
                color: "#f59e0b",
            },
            {
                text: "Workers operating safely",
                status: "COMPLETED",
                color: "#22c55e",
            },
            {
                text: "No emergency action required",
                status: "COMPLETED",
                color: "#22c55e",
            },
        ];

    return (
        <GlassPanel>
            <SectionTitle
                title="🤖 Autonomous Response Log"
                subtitle="Real-time actions executed automatically by SentinelAI"
            />

            <div
                style={{
                    marginBottom: "12px",
                    color: "#94A3B8",
                    fontSize: "12px",
                    textAlign: "center",
                }}
            >
                ⚙ Today's Automation • {actions.length} Actions Executed
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    height: "300px",
                    overflowY: "auto",
                    paddingRight: "4px",
                }}
            >
                {actions.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "12px",
                            background: "#111827",
                            borderLeft: `4px solid ${item.color}`,
                            padding: "10px 12px",
                            borderRadius: "8px",
                            transition: "all .25s ease",
                            cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateX(0)";
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "8px",
                                flex: 1,
                            }}
                        >
                            <span
                                style={{
                                    background: item.color,
                                    color: "#fff",
                                    padding: "2px 8px",
                                    borderRadius: "999px",
                                    fontSize: "10px",
                                    fontWeight: "700",
                                    letterSpacing: "0.4px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {item.status}
                            </span>

                            <span
                                style={{
                                    color: "#E5E7EB",
                                    fontSize: "14px",
                                    lineHeight: 1.4,
                                }}
                            >
                                {item.text}
                            </span>
                        </div>

                        <span
                            style={{
                                color: "#94A3B8",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {new Date().toLocaleTimeString()}
                        </span>
                    </div>
                ))}
            </div>
        </GlassPanel>
    );
}

export default AIActionLog;