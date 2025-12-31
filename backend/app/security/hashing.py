import uuid
""" ceci juste un exemple temporaire de hachage de mot de passe """

def hash_password(password: str):
    """
    TEMPORAIRE – À remplacer par l'algorithme SHA-256 maison
    """
    fake_salt = str(uuid.uuid4())
    fake_hash = f"hashed_{password}_{fake_salt}"
    return fake_hash, fake_salt


def verify_password(password: str, stored_hash: str, salt: str) -> bool:
    """
    TEMPORAIRE – Simulation de vérification
    """
    expected_hash = f"hashed_{password}_{salt}"
    return expected_hash == stored_hash
