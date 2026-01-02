from fastapi import FastAPI
from app.api.routes import auth
from app.db.database import engine
from app.db import models
from fastapi.middleware.cors import CORSMiddleware  # ✅ Importer

models.Base.metadata.create_all(bind=engine)



app = FastAPI(
    title="Password Hashing System",
    description="API de stockage sécurisé des mots de passe",
    version="1.0.0"
)
# ✅ AJOUTER CES LIGNES (avant les routes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",      # React dev server
        "http://127.0.0.1:5173",      # Variante
        "http://localhost:3000",      # Au cas où tu changes de port
    ],
    allow_credentials=True,
    allow_methods=["*"],              # Autorise GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],              # Autorise tous les headers
)

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def root():
    return {"message": "API is running"}
