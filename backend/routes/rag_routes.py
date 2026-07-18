from fastapi import APIRouter
from ai.rag_agent import search

router = APIRouter()

@router.post("/rag")

def rag(sensor: dict):

    return search(sensor)