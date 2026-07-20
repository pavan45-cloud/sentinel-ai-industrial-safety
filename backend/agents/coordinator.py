from ai.ai_memory import analyze_trend
from ai.decision_agent import ai_decision
# from ai.compliance_agent import audit
from agents.emergency_orchestrator import orchestrate
from ai.compound_risk_engine import calculate_compound_risk
from agents.intelligence_layer import build_intelligence_timeline
def master_ai(sensor, permit, worker, ppe):

    
    risk_score = 0
    if sensor["gas"] > 70:
        risk_score += 3
        

    # Temperature Risk
    if sensor["temperature"] > 55:
        risk_score += 2
        

    # Pressure Risk
    if sensor["pressure"] > 130:
        risk_score += 2
       

    # Hot Work Permit
    if permit.get("hot_work"):
        risk_score += 2
        

    # PPE Violations
    if ppe.get("NO-Hardhat", 0) > 0:
        risk_score += 2
        
    if ppe.get("NO-Safety Vest", 0) > 0:
        risk_score += 2
        

    if ppe.get("NO-Mask", 0) > 0:
        risk_score += 1
       

    # Too Many Workers
    if worker.get("count", 1) > 15:
        risk_score += 2
        
    
    
    

    


        # Compound Risk Engine
    compound_result = calculate_compound_risk(
        sensors=sensor,
        permits=permit,
        ppe=ppe,
        worker_zone=worker.get("zone", "Unknown"),
        worker_count=worker.get("count", 1),
        shift=worker.get("shift", "Day"),
        maintenance=permit.get("maintenance", False),
        equipment_health=permit.get("equipment_health", 90),
    )

    # Final Risk comes ONLY from Compound Risk Engine
    final_risk = compound_result["level"]
    safety_result = ai_decision(
        sensor,
        permit,
        worker,
        final_risk
    )

    triggered_agents = [
        "Decision Agent",
        "PPE Detection Agent",
        "Incident Intelligence Agent",
        "Compliance Agent",
        "Master AI Coordinator"
    ]

    # AI Memory
    memory = analyze_trend()
    memory["risk"] = final_risk

    if final_risk == "CRITICAL":
        memory["prediction"] = "Immediate intervention required."
        memory["recommendations"] = [
            "Shutdown equipment",
            "Evacuate workers",
            "Notify emergency response team",
            "Isolate gas supply"
        ]

    elif final_risk == "HIGH":
        memory["prediction"] = "High probability of an industrial incident."
        memory["recommendations"] = [
            "Increase monitoring",
            "Inspect equipment",
            "Prepare emergency team"
        ]

    elif final_risk == "MEDIUM":
        memory["prediction"] = "Minor abnormalities detected."
        memory["recommendations"] = [
            "Continue monitoring",
            "Schedule inspection"
        ]

    else:
        memory["prediction"] = "Plant operating normally."
        memory["recommendations"] = [
            "Continue normal operations"
        ]

    # Dashboard Recommendation
    #recommendation = compound_result["recommendations"]
    
   
    # Emergency Response
    emergency = orchestrate(sensor, final_risk)

    timeline = build_intelligence_timeline(
        sensor=sensor,
        permit=permit,
        worker=worker,
        ppe=ppe,
        compound_result=compound_result,
        emergency=emergency,
    )

    reason_count = len(compound_result["reasons"])

    if final_risk == "CRITICAL":
        ai_summary = (
            f"{reason_count} compound risk(s) detected. "
            "Overall risk is CRITICAL. Immediate action is required."
        )

    elif final_risk == "HIGH":
        ai_summary = (
            f"{reason_count} compound risk(s) detected. "
            "Overall risk is HIGH. Prompt corrective action is recommended."
        )

    elif final_risk == "MEDIUM":
        ai_summary = (
            f"{reason_count} compound risk(s) detected. "
            "Overall risk is MEDIUM. Monitoring and preventive action are recommended."
        )

    else:
        ai_summary = (
            "No significant compound risks detected. Plant operating normally."
        )
    return {

        "final_risk": final_risk,

        "manual_risk_score": risk_score,

        "compound_reasons": compound_result["reasons"],
        "ai_summary": ai_summary,



        

        "confidence": compound_result.get("confidence", 90),

        "triggered_agents": triggered_agents,

        "evidence": {
            "Gas": sensor["gas"],
            "Temperature": sensor["temperature"],
            "Pressure": sensor["pressure"],
            "Hot Work": permit.get("hot_work"),
            "PPE": ppe
        },

        "recommendation": compound_result["recommendations"],

        "safety": safety_result,

        "ppe": ppe,

        "emergency": emergency,
        "memory": memory,

        "compound_risk": compound_result,

        "timeline": timeline
    }