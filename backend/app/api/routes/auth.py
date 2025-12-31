from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from schemas.user import UserRegister, UserLogin, MessageResponse
from services.auth_service import register_user, authenticate_user
from db.database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register", response_model=MessageResponse)
def register(data: UserRegister, db: Session = Depends(get_db)):
    success = register_user(db, data.username, data.password)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User already exists"
        )
    return {"message": "User registered successfully", "status": "OK"}

@router.post("/login", response_model=MessageResponse)
def login(data: UserLogin, db: Session = Depends(get_db)):
    authenticated = authenticate_user(db, data.username, data.password)
    if not authenticated:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    return {"message": "Authentication successful", "status": "OK"}
