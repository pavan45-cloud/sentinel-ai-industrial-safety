def orchestrate(sensor, risk):

    actions = []

    teams = []

    if risk == "CRITICAL":

        actions = [
            "🚨 Stop Plant Operations",
            "🚨 Activate Fire Suppression",
            "🚨 Evacuate Workers",
            "🚨 Notify Plant Manager",
            "🚨 Notify Safety Officer",
            "🚨 Lock Hazard Zone",
            "🚨 Preserve CCTV Evidence",
            "🚨 Generate Incident Report"
        ]

        teams = [
            "Fire Team",
            "Medical Team",
            "Plant Manager",
            "Safety Officer",
            "Emergency Control Room"
        ]

    elif risk == "HIGH":

        actions=[

        "🚨 Inspect Area",

        "🚨 Reduce Plant Load",

        "🚨 Alert Safety Officer",

        "🚨 Activate Emergency Alarm",

        "🚨 Restrict Worker Entry"

        ]

        teams = [
            "Safety Officer"
        ]

    else:
            actions=[

            "✅ Continue Monitoring",

            "✅ Log Sensor Data",

            "✅ AI Health Check Passed"

            ]

    return {

        "risk": risk,

        "actions": actions,

        "teams": teams

    }