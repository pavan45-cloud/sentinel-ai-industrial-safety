def recommendations(risk):

    actions=[]

    if "High Gas" in risk["reasons"]:
        actions.append("Ventilate Area")

    if "Worker without Hardhat" in risk["reasons"]:
        actions.append("Issue PPE Alert")

    if "Hot Work Active" in risk["reasons"]:
        actions.append("Review Permit")

    if "Hazard Zone" in risk["reasons"]:
        actions.append("Move Worker")

    if risk["level"]=="CRITICAL":
        actions.append("Evacuate Immediately")

    return actions