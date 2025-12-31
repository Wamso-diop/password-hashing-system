from pydantic import BaseModel, Field

class UserRegister(BaseModel):
    username: str = Field(..., min_length=3)
    password: str = Field(..., min_length=6)

class UserLogin(BaseModel):
    username: str
    password: str

class MessageResponse(BaseModel):
    message: str
    status: str 
