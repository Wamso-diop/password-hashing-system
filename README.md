📦 Password Hashing System

Projet académique : Stockage Sécurisé des Mots de Passe

📌 Présentation du projet

Ce projet a pour objectif de concevoir une application web sécurisée permettant de :

hacher les mots de passe avant leur stockage

ne jamais stocker de mot de passe en clair

démontrer les principes fondamentaux de sécurité appliqués aux données sensibles

Le projet est divisé en trois parties indépendantes, développées en parallèle.

👥 Répartition des rôles
Rôle	Responsable	Description
Backend / API	LONTSIE	API FastAPI, base de données SQL, endpoints
Frontend	NONGNING	Interfaces HTML / CSS / JavaScript
Algorithme de hachage	MBAH	Implémentation de l’algorithme SHA-256

🧱 Architecture globale du projet
password-hashing-system/
│
├── .venv/                     # environnement virtuel Python (non versionné)
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   │
│   │   ├── api/
│   │   │   └── routes/
│   │   │       └── auth.py
│   │   │
│   │   ├── core/
│   │   │   └── config.py
│   │   │
│   │   ├── db/
│   │   │   ├── database.py
│   │   │   └── models.py
│   │   │
│   │   ├── schemas/
│   │   │   └── user.py
│   │   │
│   │   ├── services/
│   │   │   └── auth_service.py
│   │   │
│   │   └── security/
│   │       └── hashing.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── css/
│   └── js/
│
├── docs/
│   ├── architecture.md
│   ├── hashing_algorithm.md
│   ├── api_documentation.md
│   └── tutorial.md
│
├── .gitignore
└── README.md

⚙️ Technologies utilisées
Backend

Python 3.12

FastAPI

SQLAlchemy

SQLite

Uvicorn

Frontend

HTML

CSS

JavaScript (Fetch API)

🚀 Lancer le projet (IMPORTANT)

1️⃣ creer l’environnement virtuel
python -m venv .venv

Depuis la racine du projet :

.venv\Scripts\activate

2️⃣ Installer les dépendances backend
cd backend
pip install -r requirements.txt

3️⃣ Lancer l’API FastAPI

Toujours depuis le dossier backend :

uvicorn app.main:app --reload


➡️ L’API sera disponible sur :
👉 http://127.0.0.1:8000

➡️ Documentation automatique (Swagger) :
👉 http://127.0.0.1:8000/docs

🔐 Endpoints disponibles (pour le frontend)
🔹 Inscription
POST /auth/register


Body (JSON) :

{
  "username": "testuser",
  "password": "password123"
}


Réponse :

{
  "message": "User registered successfully",
  "status": "OK"
}

🔹 Connexion
POST /auth/login


Body (JSON) :

{
  "username": "testuser",
  "password": "password123"
}


Réponse :

{
  "message": "Authentication successful",
  "status": "OK"
}

🧠 Informations IMPORTANTES pour le responsable FRONTEND (NONGNING)

L’API attend du JSON

Les réponses contiennent toujours :

message

status

Les erreurs retournent des codes HTTP standards :

400 → utilisateur déjà existant

401 → identifiants invalides

👉 Utiliser fetch() avec Content-Type: application/json.

🧠 Informations IMPORTANTES pour le responsable HASHING

📁 Fichier concerné :

backend/app/security/hashing.py

Fonctions à implémenter OBLIGATOIREMENT
def hash_password(password: str):
    """
    Doit retourner:
    - password_hash (str)
    - salt (str)
    """
    pass


def verify_password(password: str, stored_hash: str, salt: str) -> bool:
    pass

Contraintes

Ne PAS modifier la signature des fonctions

Le reste du projet dépend de ce contrat

Le mot de passe ne doit JAMAIS être stocké en clair

Utiliser SHA-256 (implémentation maison)

⚠️ Actuellement, une version temporaire est en place pour permettre au front de fonctionner.

🗄️ Base de données

SQLite (users.db)

Créée automatiquement au lancement

Table principale : users

Champs :

id

username

password_hash

salt

📄 Documentation (livrable)

Le dossier docs/ contient :

architecture du projet

explication de l’algorithme de hachage

documentation API

tutoriel final