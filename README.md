# Password Hashing System

## Projet académique
**Stockage Sécurisé des Mots de Passe**

---

## Présentation du projet

Ce projet a pour objectif de concevoir une **application web sécurisée** permettant de :

- hacher les mots de passe avant leur stockage
- ne jamais stocker de mot de passe en clair
- démontrer les principes fondamentaux de sécurité appliqués aux données sensibles

Le projet est divisé en **trois parties indépendantes**, développées en parallèle.

---

## Répartition des rôles

| Rôle | Responsable | Description |
|------|------------|-------------|
| Backend / API | LONTSIE | API FastAPI, base de données SQL, endpoints |
| Frontend | NONGNING | Interfaces HTML / CSS / JavaScript |
| Algorithme de hachage | MBAH | Implémentation de l’algorithme SHA-256 |

---

## Architecture globale du projet

```text
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


Technologies utilisées
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

Lancer le projet
1. Créer l’environnement virtuel
python -m venv .venv

2. Activer l’environnement virtuel
.venv\Scripts\activate

3. Installer les dépendances backend
cd backend
pip install -r requirements.txt

4. Lancer l’API FastAPI
uvicorn app.main:app --reload


API : http://127.0.0.1:8000

Documentation Swagger : http://127.0.0.1:8000/docs

Endpoints disponibles
Inscription
POST /auth/register

Body (JSON)
{
  "username": "testuser",
  "password": "password123"
}

Réponse
{
  "message": "User registered successfully",
  "status": "OK"
}

Connexion
POST /auth/login

Body (JSON)
{
  "username": "testuser",
  "password": "password123"
}

Réponse
{
  "message": "Authentication successful",
  "status": "OK"
}

Informations pour le responsable Frontend

L’API accepte uniquement des requêtes JSON

Les réponses contiennent toujours :

message

status

Codes d’erreur :

400 : utilisateur déjà existant

401 : identifiants invalides

Utiliser fetch() avec l’en-tête :

Content-Type: application/json

Informations pour le responsable Hashing
Fichier concerné
backend/app/security/hashing.py

Fonctions à implémenter
def hash_password(password: str):
    """
    Doit retourner :
    - password_hash (str)
    - salt (str)
    """
    pass


def verify_password(password: str, stored_hash: str, salt: str) -> bool:
    pass

Contraintes

Ne pas modifier la signature des fonctions

Le mot de passe ne doit jamais être stocké en clair

Implémentation maison de SHA-256

Une version temporaire est actuellement utilisée pour permettre le développement du frontend.

Base de données

SQLite (users.db)

Créée automatiquement au lancement

Table users

Champs

id

username

password_hash

salt