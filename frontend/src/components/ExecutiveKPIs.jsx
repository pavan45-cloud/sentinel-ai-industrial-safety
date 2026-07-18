
import {
  ShieldCheck,
  AlertTriangle,
  Users,
  FileCheck,
} from "lucide-react";

import MetricCard from "./ui/MetricCard";

function ExecutiveKPIs({
  safetyScore,
  risk,
  worker,
  permit,
}) {
  const riskColor =
    risk.includes("High")
      ? "#ef4444"
      : risk.includes("Medium")
        ? "#f59e0b"
        : "#22c55e";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      <MetricCard
        title="Safety Score"
        value={`${safetyScore}%`}
        subtitle="Overall Plant Health"
        color="#22c55e"
        icon={<ShieldCheck size={24} color="white" />}
      />

      <MetricCard
        title="Risk Level"
        value={risk}
        subtitle="AI Risk Assessment"
        color={riskColor}
        icon={<AlertTriangle size={24} color="white" />}
      />

      <MetricCard
        title="Workers Active"
        value={worker.count}
        subtitle="Inside Plant"
        color="#3b82f6"
        icon={<Users size={24} color="white" />}
      />

      <MetricCard
        title="Permit Status"
        value={permit.status}
        subtitle={permit.type}
        color="#8b5cf6"
        icon={<FileCheck size={24} color="white" />}
      />
    </div>
  );
}

export default ExecutiveKPIs;