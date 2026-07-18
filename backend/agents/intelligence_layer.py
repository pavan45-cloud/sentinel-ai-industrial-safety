from datetime import datetime


def now():
    return datetime.now().strftime("%H:%M:%S")


def build_intelligence_timeline(
    sensor,
    permit,
    worker,
    ppe,
    compound_result,
    emergency,
):
    timeline = []

    # ---------------- Sensor Agent ----------------

    sensor_output = (
        "HIGH SENSOR RISK"
        if sensor["gas"] > 70 or sensor["temperature"] > 55 or sensor["pressure"] > 130
        else "NORMAL SENSOR STATUS"
    )

    timeline.append({
        "time": now(),
        "agent": "📡 Sensor Agent",
        "status": "SUCCESS",

        "input": "Live IoT Sensor Stream",

        "analysis": (
            f"Gas={sensor['gas']} ppm | "
            f"Temp={sensor['temperature']}°C | "
            f"Pressure={sensor['pressure']} kPa"
        ),

        "output": sensor_output,

        "next_agent": "Compound Risk Agent"
    })

    # ---------------- Compound Risk ----------------

    timeline.append({
        "time": now(),
        "agent": "🧠 Compound Risk Agent",
        "status": compound_result["level"],

        "input": sensor_output,

        "analysis": compound_result["explanation"],

        "output": f"{compound_result['level']} Risk",

        "next_agent": "Permit Intelligence Agent"
    })

    # ---------------- Permit ----------------

    permit_output = (
        "Permit Conflict Detected"
        if permit.get("hot_work")
        else "Permit Safe"
    )

    timeline.append({
        "time": now(),
        "agent": "📋 Permit Intelligence Agent",
        "status": (
            "WARNING"
            if permit.get("hot_work")
            else "SAFE"
        ),

        "input": compound_result["level"],

        "analysis": (
            "Hot Work Permit evaluated against live sensor conditions."
        ),

        "output": permit_output,

        "next_agent": "PPE Detection Agent"
    })

    # ---------------- PPE ----------------

    violations = []

    if ppe.get("NO-Hardhat", 0):
        violations.append("Hardhat")

    if ppe.get("NO-Safety Vest", 0):
        violations.append("Safety Vest")

    if ppe.get("NO-Mask", 0):
        violations.append("Mask")

    if violations:

        ppe_output = "PPE Violations"

        ppe_status = "WARNING"

        ppe_analysis = (
            "Missing: " + ", ".join(violations)
        )

    else:

        ppe_output = "PPE Compliant"

        ppe_status = "SAFE"

        ppe_analysis = "All workers wearing required PPE."

    timeline.append({
        "time": now(),
        "agent": "🦺 PPE Detection Agent",
        "status": ppe_status,

        "input": permit_output,

        "analysis": ppe_analysis,

        "output": ppe_output,

        "next_agent": "Compliance Agent"
    })

    # ---------------- Compliance ----------------

    compliance_status = (
        "VIOLATION"
        if compound_result["level"] in ["HIGH", "CRITICAL"]
        and permit.get("hot_work")
        else "SAFE"
    )

    compliance_output = (
        "OISD Rule Check Failed"
        if compliance_status == "VIOLATION"
        else "Plant Operating Within Rules"
    )

    timeline.append({
        "time": now(),
        "agent": "📑 Compliance Agent",
        "status": compliance_status,

        "input": ppe_output,

        "analysis": (
            "Checking OISD / Factory Act / PPE / Permit compliance."
        ),

        "output": compliance_output,

        "next_agent": "Incident Intelligence Agent"
    })

    # ---------------- Incident Intelligence ----------------

    incident_output = (
        "Historical Match Found"
        if compound_result["level"] in ["HIGH", "CRITICAL"]
        else "No Similar Incident"
    )

    timeline.append({
        "time": now(),
        "agent": "📚 Incident Intelligence Agent",
        "status": (
            "WARNING"
            if incident_output == "Historical Match Found"
            else "SAFE"
        ),

        "input": compliance_output,

        "analysis": (
            "Searching industrial accident knowledge base."
        ),

        "output": incident_output,

        "next_agent": "Emergency Response Agent"
    })

    # ---------------- Emergency ----------------

    timeline.append({
        "time": now(),
        "agent": "🚨 Emergency Response Agent",
        "status": emergency["risk"],

        "input": incident_output,

        "analysis": (
            f"{len(emergency['actions'])} emergency action(s) generated."
        ),

        "output": emergency["risk"],

        "next_agent": "Master AI Coordinator"
    })

    # ---------------- Master AI ----------------

    timeline.append({
        "time": now(),
        "agent": "🤖 Master AI Coordinator",
        "status": compound_result["level"],

        "input": emergency["risk"],

        "analysis": (
            "Collected outputs from all specialized AI agents."
        ),

        "output": (
            f"Final Decision = {compound_result['level']}"
        ),

        "next_agent": "END"
    })

    return timeline