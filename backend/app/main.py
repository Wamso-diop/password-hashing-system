from fastapi import FastAPI
from api.routes import auth
from db.database import engine
from db import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Password Hashing System",
    description="API de stockage sécurisé des mots de passe",
    version="1.0.0"
)

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def root():
    return {"message": "API is running"}
