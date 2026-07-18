from fastapi import APIRouter
from ai.compliance_agent import audit

router = APIRouter()

@router.post("/compliance")

def compliance(sensor: dict):
    return audit(sensor)