import hashlib
import os

def hash_password(password: str) -> tuple:
    """
    Génère le hash SHA-256 d'un mot de passe avec un salt.
    
    Args:
        password (str): Le mot de passe à hasher
    
    Returns:
        tuple: (password_hash, salt) - Le hash SHA-256 et le salt en format hexadécimal
    """
    if not password:
        raise ValueError("Le mot de passe ne peut pas être vide")
    
    # Générer un salt aléatoire
    salt = os.urandom(32)
    
    # Convertir le mot de passe en bytes
    password_bytes = password.encode('utf-8')
    
    # Créer le hash SHA-256 avec le salt
    sha256_hash = hashlib.sha256(salt + password_bytes)
    
    # Retourner le hash et le salt en format hexadécimal
    return sha256_hash.hexdigest(), salt.hex()


def verify_password(password: str, password_hash: str, salt: str) -> bool:
    """
    Vérifie si un mot de passe correspond à un hash.
    
    Args:
        password (str): Le mot de passe à vérifier
        password_hash (str): Le hash à comparer
        salt (str): Le salt utilisé lors du hashage
    
    Returns:
        bool: True si le mot de passe correspond, False sinon
    """
    # Convertir le salt de hex vers bytes
    salt_bytes = bytes.fromhex(salt)
    
    # Convertir le mot de passe en bytes
    password_bytes = password.encode('utf-8')
    
    # Créer le hash avec le même salt
    computed_hash = hashlib.sha256(salt_bytes + password_bytes).hexdigest()
    
    # Comparer avec le hash stocké
    return computed_hash == password_hash