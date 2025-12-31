from sqlalchemy.orm import Session
from db.models import User
from security.hashing import hash_password, verify_password

def register_user(db: Session, username: str, password: str) -> bool:
    existing_user = db.query(User).filter(User.username == username).first()
    if existing_user:
        return False

    password_hash, salt = hash_password(password)
    user = User(
        username=username,
        password_hash=password_hash,
        salt=salt
    )
    db.add(user)
    db.commit()
    return True

def authenticate_user(db: Session, username: str, password: str) -> bool:
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False

    return verify_password(password, user.password_hash, user.salt)
